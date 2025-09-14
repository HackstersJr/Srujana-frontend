import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Brain, Users, TrendingUp, UserCheck, Clock } from "lucide-react";

interface StaffingPrediction {
  id: string;
  department: string;
  timeSlot: string;
  predictedPatients: number;
  currentStaff: number;
  recommendedStaff: number;
  confidence: number;
  priority: "low" | "medium" | "high" | "critical";
  reasoning: string;
  estimatedCost?: string;
}

interface StaffingPredictorProps {
  title: string;
  predictions: StaffingPrediction[];
  className?: string;
  onApplyRecommendation?: (predictionId: string) => void;
}

export function StaffingPredictor({ 
  title, 
  predictions, 
  className = "",
  onApplyRecommendation
}: StaffingPredictorProps) {
  const getPriorityColor = (priority: StaffingPrediction["priority"]) => {
    switch (priority) {
      case "critical": return "bg-red-500";
      case "high": return "bg-orange-500";
      case "medium": return "bg-blue-500";
      case "low": return "bg-green-500";
      default: return "bg-neutral-500";
    }
  };

  const getPriorityBadge = (priority: StaffingPrediction["priority"]) => {
    switch (priority) {
      case "critical": return <Badge variant="destructive">Critical</Badge>;
      case "high": return <Badge variant="default">High</Badge>;
      case "medium": return <Badge variant="secondary">Medium</Badge>;
      case "low": return <Badge variant="outline">Low</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStaffingStatus = (current: number, recommended: number) => {
    const diff = recommended - current;
    if (diff > 0) {
      return {
        status: "shortage",
        message: `Need +${diff} staff`,
        color: "text-red-600"
      };
    } else if (diff < 0) {
      return {
        status: "surplus",
        message: `${Math.abs(diff)} excess staff`,
        color: "text-blue-600"
      };
    } else {
      return {
        status: "optimal",
        message: "Optimal staffing",
        color: "text-green-600"
      };
    }
  };

  return (
    <div className={`bg-white rounded-xl border ${className}`}>
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="h-5 w-5 text-purple-600" />
            <h3 className="font-semibold text-neutral-900">{title}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline">
              <TrendingUp className="h-4 w-4 mr-2" />
              View Trends
            </Button>
            <Button size="sm">
              <UserCheck className="h-4 w-4 mr-2" />
              Auto-Schedule
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        {predictions.map((prediction) => {
          const staffingStatus = getStaffingStatus(prediction.currentStaff, prediction.recommendedStaff);
          
          return (
            <div key={prediction.id} className="p-4 rounded-lg border hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${getPriorityColor(prediction.priority)}`}></div>
                  <div>
                    <h4 className="font-medium text-neutral-900">{prediction.department}</h4>
                    <p className="text-sm text-neutral-600 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {prediction.timeSlot}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{prediction.confidence}% confidence</Badge>
                  {getPriorityBadge(prediction.priority)}
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-lg font-semibold text-blue-600">{prediction.predictedPatients}</p>
                  <p className="text-xs text-blue-700">Predicted Patients</p>
                </div>
                <div className="text-center p-3 bg-neutral-50 rounded-lg">
                  <p className="text-lg font-semibold text-neutral-900">{prediction.currentStaff}</p>
                  <p className="text-xs text-neutral-600">Current Staff</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-lg font-semibold text-green-600">{prediction.recommendedStaff}</p>
                  <p className="text-xs text-green-700">Recommended</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-lg font-semibold text-purple-600">
                    {prediction.estimatedCost || "TBD"}
                  </p>
                  <p className="text-xs text-purple-700">Est. Cost</p>
                </div>
              </div>
              
              {/* Staffing Status */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-neutral-600">Staffing Status:</span>
                <span className={`text-sm font-semibold ${staffingStatus.color}`}>
                  {staffingStatus.message}
                </span>
              </div>
              
              {/* AI Reasoning */}
              <div className="p-3 bg-neutral-50 rounded-lg mb-4">
                <div className="flex items-start space-x-2">
                  <Brain className="h-4 w-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900 mb-1">AI Analysis:</p>
                    <p className="text-sm text-neutral-700">{prediction.reasoning}</p>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => onApplyRecommendation?.(prediction.id)}
                >
                  Schedule Staff
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  View Details
                </Button>
                {prediction.priority === "critical" && (
                  <Button size="sm" variant="destructive" className="flex-1">
                    Emergency Call
                  </Button>
                )}
              </div>
            </div>
          );
        })}
        
        {predictions.length === 0 && (
          <div className="text-center py-8">
            <Brain className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-500 mb-2">No staffing predictions available</p>
            <p className="text-sm text-neutral-400">AI is analyzing patient flow patterns...</p>
          </div>
        )}
        
        {/* Summary */}
        {predictions.length > 0 && (
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium text-neutral-900">AI Summary</p>
                  <p className="text-sm text-neutral-600">
                    {predictions.filter(p => p.recommendedStaff > p.currentStaff).length} departments need additional staff
                  </p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Apply All
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}