import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Truck, Clock, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";

interface SupplyChainItem {
  id: string;
  supplier: string;
  items: string[];
  status: "active" | "delayed" | "emergency" | "completed";
  estimatedDelivery: string;
  priority: "low" | "medium" | "high" | "critical";
  value: string;
}

interface SupplyChainWidgetProps {
  title: string;
  items: SupplyChainItem[];
  className?: string;
}

export function SupplyChainWidget({ title, items, className = "" }: SupplyChainWidgetProps) {
  const getStatusIcon = (status: SupplyChainItem["status"]) => {
    switch (status) {
      case "active":
        return <Truck className="h-4 w-4 text-green-600" />;
      case "delayed":
        return <Clock className="h-4 w-4 text-orange-600" />;
      case "emergency":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      default:
        return <RefreshCw className="h-4 w-4 text-neutral-400" />;
    }
  };

  const getStatusColor = (status: SupplyChainItem["status"]) => {
    switch (status) {
      case "active": return "bg-green-500";
      case "delayed": return "bg-orange-500";
      case "emergency": return "bg-red-500";
      case "completed": return "bg-blue-500";
      default: return "bg-neutral-500";
    }
  };

  const getPriorityBadge = (priority: SupplyChainItem["priority"]) => {
    switch (priority) {
      case "critical":
        return <Badge variant="destructive">Critical</Badge>;
      case "high":
        return <Badge variant="default">High</Badge>;
      case "medium":
        return <Badge variant="secondary">Medium</Badge>;
      case "low":
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className={`bg-white rounded-xl border ${className}`}>
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-neutral-900">{title}</h3>
          <Button size="sm" variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="p-4 rounded-lg border hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
                <div>
                  <h4 className="font-medium text-neutral-900">{item.supplier}</h4>
                  <p className="text-sm text-neutral-600">{item.estimatedDelivery}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(item.status)}
                {getPriorityBadge(item.priority)}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Items:</span>
                <span className="text-sm font-medium text-neutral-900">
                  {item.items.length} item{item.items.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Value:</span>
                <span className="text-sm font-semibold text-green-600">{item.value}</span>
              </div>
              
              {/* Item Preview */}
              <div className="mt-2">
                <p className="text-xs text-neutral-500 mb-1">Items:</p>
                <div className="flex flex-wrap gap-1">
                  {item.items.slice(0, 3).map((itemName, idx) => (
                    <span key={idx} className="text-xs bg-neutral-100 px-2 py-1 rounded">
                      {itemName}
                    </span>
                  ))}
                  {item.items.length > 3 && (
                    <span className="text-xs text-neutral-500">
                      +{item.items.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex space-x-2 mt-4">
              <Button size="sm" variant="outline" className="flex-1">
                Track
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                Contact
              </Button>
              {item.status === "emergency" && (
                <Button size="sm" variant="destructive" className="flex-1">
                  Escalate
                </Button>
              )}
            </div>
          </div>
        ))}
        
        {items.length === 0 && (
          <div className="text-center py-8">
            <Truck className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-500">No supply chain items to display</p>
          </div>
        )}
      </div>
    </div>
  );
}