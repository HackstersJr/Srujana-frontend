import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CheckSquare, AlertCircle, FileText, Calendar, Award, XCircle } from "lucide-react";

interface ComplianceItem {
  id: string;
  regulation: string;
  status: "compliant" | "non_compliant" | "warning" | "pending";
  score: number;
  lastAudit: string;
  nextReview: string;
  violations?: number;
  department: string;
  actionRequired?: boolean;
}

interface ComplianceTrackerProps {
  title: string;
  items: ComplianceItem[];
  overallScore: number;
  className?: string;
  onViewDetails?: (itemId: string) => void;
  onTakeAction?: (itemId: string) => void;
}

export function ComplianceTracker({
  title,
  items,
  overallScore,
  className = "",
  onViewDetails,
  onTakeAction
}: ComplianceTrackerProps) {
  const getStatusColor = (status: ComplianceItem["status"]) => {
    switch (status) {
      case "compliant": return "bg-green-500";
      case "warning": return "bg-orange-500";
      case "non_compliant": return "bg-red-500";
      case "pending": return "bg-blue-500";
      default: return "bg-neutral-500";
    }
  };

  const getStatusIcon = (status: ComplianceItem["status"]) => {
    switch (status) {
      case "compliant":
        return <CheckSquare className="h-4 w-4 text-green-600" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-orange-600" />;
      case "non_compliant":
        return <XCircle className="h-4 w-4 text-red-600" />;
      case "pending":
        return <Calendar className="h-4 w-4 text-blue-600" />;
      default:
        return <FileText className="h-4 w-4 text-neutral-400" />;
    }
  };

  const getStatusBadge = (status: ComplianceItem["status"], score: number) => {
    switch (status) {
      case "compliant":
        return <Badge variant="default" className="bg-green-600">{score}%</Badge>;
      case "warning":
        return <Badge variant="secondary">{score}%</Badge>;
      case "non_compliant":
        return <Badge variant="destructive">{score}%</Badge>;
      case "pending":
        return <Badge variant="outline">Pending</Badge>;
      default:
        return <Badge variant="outline">{score}%</Badge>;
    }
  };

  const getOverallScoreColor = () => {
    if (overallScore >= 95) return "text-green-600";
    if (overallScore >= 85) return "text-blue-600";
    if (overallScore >= 75) return "text-orange-600";
    return "text-red-600";
  };

  const criticalItems = items.filter(item => item.status === "non_compliant" || item.actionRequired);
  const warningItems = items.filter(item => item.status === "warning");

  return (
    <div className={`bg-white rounded-xl border ${className}`}>
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Award className="h-5 w-5 text-purple-600" />
            <div>
              <h3 className="font-semibold text-neutral-900">{title}</h3>
              <p className="text-sm text-neutral-600">
                Overall Score: <span className={`font-semibold ${getOverallScoreColor()}`}>
                  {overallScore}%
                </span>
              </p>
            </div>
          </div>
          <Button size="sm" variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Alert Summary */}
      {(criticalItems.length > 0 || warningItems.length > 0) && (
        <div className="p-4 border-b bg-gradient-to-r from-red-50 to-orange-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {criticalItems.length > 0 && (
                <div className="flex items-center space-x-2">
                  <XCircle className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-700">
                    {criticalItems.length} Critical Issue{criticalItems.length !== 1 ? 's' : ''}
                  </span>
                </div>
              )}
              {warningItems.length > 0 && (
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-700">
                    {warningItems.length} Warning{warningItems.length !== 1 ? 's' : ''}
                  </span>
                </div>
              )}
            </div>
            <Button size="sm" variant="outline">
              Address All
            </Button>
          </div>
        </div>
      )}
      
      <div className="p-6 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="p-4 rounded-lg border hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
                <div>
                  <h4 className="font-medium text-neutral-900">{item.regulation}</h4>
                  <p className="text-sm text-neutral-600">{item.department}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(item.status)}
                {getStatusBadge(item.status, item.score)}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-sm text-neutral-600">Last Audit</p>
                <p className="font-medium text-neutral-900">{item.lastAudit}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-600">Next Review</p>
                <p className="font-medium text-neutral-900">{item.nextReview}</p>
              </div>
            </div>
            
            {/* Score Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-600">Compliance Score</span>
                <span className="font-medium">{item.score}%</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    item.score >= 95 ? 'bg-green-500' :
                    item.score >= 85 ? 'bg-blue-500' :
                    item.score >= 75 ? 'bg-orange-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
            </div>

            {/* Violations */}
            {item.violations && item.violations > 0 && (
              <div className="flex items-center space-x-2 p-2 bg-red-50 rounded-lg mb-3">
                <XCircle className="h-4 w-4 text-red-600" />
                <span className="text-sm text-red-700">
                  {item.violations} violation{item.violations !== 1 ? 's' : ''} found
                </span>
              </div>
            )}
            
            {/* Action Required */}
            {item.actionRequired && (
              <div className="flex items-center space-x-2 p-2 bg-orange-50 rounded-lg mb-3">
                <AlertCircle className="h-4 w-4 text-orange-600" />
                <span className="text-sm text-orange-700">Action required</span>
              </div>
            )}
            
            {/* Actions */}
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1"
                onClick={() => onViewDetails?.(item.id)}
              >
                View Details
              </Button>
              {(item.actionRequired || item.status === "non_compliant") && (
                <Button 
                  size="sm" 
                  variant="default"
                  className="flex-1"
                  onClick={() => onTakeAction?.(item.id)}
                >
                  Take Action
                </Button>
              )}
              {item.status === "non_compliant" && (
                <Button size="sm" variant="destructive" className="flex-1">
                  Urgent
                </Button>
              )}
            </div>
          </div>
        ))}
        
        {items.length === 0 && (
          <div className="text-center py-8">
            <CheckSquare className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-500 mb-2">No compliance items to display</p>
            <p className="text-sm text-neutral-400">All systems are compliant</p>
          </div>
        )}
        
        {/* Summary Stats */}
        {items.length > 0 && (
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <p className="text-lg font-semibold text-green-600">
                {items.filter(item => item.status === "compliant").length}
              </p>
              <p className="text-xs text-green-700">Compliant</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <p className="text-lg font-semibold text-orange-600">
                {items.filter(item => item.status === "warning").length}
              </p>
              <p className="text-xs text-orange-700">Warnings</p>
            </div>
            <div className="text-center p-3 bg-red-50 rounded-lg">
              <p className="text-lg font-semibold text-red-600">
                {items.filter(item => item.status === "non_compliant").length}
              </p>
              <p className="text-xs text-red-700">Non-Compliant</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="text-lg font-semibold text-blue-600">
                {items.filter(item => item.status === "pending").length}
              </p>
              <p className="text-xs text-blue-700">Pending</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}