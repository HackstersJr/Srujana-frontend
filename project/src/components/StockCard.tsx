import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

interface StockCardProps {
  title: string;
  currentStock: number;
  totalCapacity: number;
  reorderLevel: number;
  department: string;
  lastUpdated: string;
  trend?: "up" | "down" | "stable";
  status?: "critical" | "low" | "good" | "optimal";
}

export function StockCard({ 
  title, 
  currentStock, 
  totalCapacity, 
  reorderLevel, 
  department, 
  lastUpdated, 
  trend = "stable",
  status = "good" 
}: StockCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "critical": return "bg-red-500";
      case "low": return "bg-orange-500";
      case "good": return "bg-blue-500";
      case "optimal": return "bg-green-500";
      default: return "bg-neutral-500";
    }
  };

  const getStatusBadge = () => {
    switch (status) {
      case "critical": return <Badge variant="destructive">Critical</Badge>;
      case "low": return <Badge variant="secondary">Low Stock</Badge>;
      case "good": return <Badge variant="default">Good</Badge>;
      case "optimal": return <Badge variant="outline">Optimal</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const stockPercentage = (currentStock / totalCapacity) * 100;
  const isUnderReorderLevel = currentStock <= reorderLevel;

  return (
    <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${getStatusColor()}`}></div>
          <div>
            <h3 className="font-semibold text-neutral-900">{title}</h3>
            <p className="text-sm text-neutral-600">{department}</p>
          </div>
        </div>
        {getStatusBadge()}
      </div>

      <div className="space-y-4">
        {/* Stock Level */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-neutral-600">Stock Level</span>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-neutral-900">{currentStock}</span>
              <span className="text-sm text-neutral-500">/ {totalCapacity}</span>
              {trend !== "stable" && (
                trend === "up" ? 
                  <TrendingUp className="h-4 w-4 text-green-600" /> :
                  <TrendingDown className="h-4 w-4 text-red-600" />
              )}
            </div>
          </div>
          <div className="w-full bg-neutral-100 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${getStatusColor()}`}
              style={{ width: `${stockPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-neutral-500 mt-1">
            <span>Reorder at: {reorderLevel}</span>
            <span>{Math.round(stockPercentage)}%</span>
          </div>
        </div>

        {/* Alert Section */}
        {isUnderReorderLevel && (
          <div className="flex items-center space-x-2 p-2 bg-orange-50 rounded-lg">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <span className="text-sm text-orange-700">Below reorder level</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="flex-1">
            View Details
          </Button>
          {isUnderReorderLevel && (
            <Button size="sm" className="flex-1">
              Reorder Now
            </Button>
          )}
        </div>

        {/* Last Updated */}
        <p className="text-xs text-neutral-500">Updated: {lastUpdated}</p>
      </div>
    </div>
  );
}