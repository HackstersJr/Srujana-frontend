import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
  icon: LucideIcon;
  subtitle?: string;
  progress?: number;
}

export function StatsCard({ title, value, change, changeType, icon: Icon, subtitle, progress }: StatsCardProps) {
  const changeColor = changeType === "increase" ? "bg-green-50 text-green-700" : 
                     changeType === "decrease" ? "bg-red-50 text-red-700" : 
                     "bg-neutral-50 text-neutral-700";

  return (
    <Card className="bg-white border rounded-2xl p-4 md:p-6">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-3 md:pb-4">
        <CardTitle className="text-xs md:text-sm text-neutral-600">{title}</CardTitle>
        <div className="p-1.5 md:p-2 bg-neutral-50 rounded-lg">
          <Icon className="h-3 w-3 md:h-4 md:w-4 text-neutral-700" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2 md:space-y-3 p-0">
        <div className="text-xl md:text-2xl font-light text-neutral-900">{value}</div>
        {progress !== undefined && (
          <div className="space-y-1">
            <Progress value={progress} className="h-1.5 md:h-2" />
            <p className="text-xs text-neutral-500">{progress}% capacity</p>
          </div>
        )}
        {subtitle && <p className="text-xs md:text-sm text-neutral-500">{subtitle}</p>}
        <Badge 
          variant="secondary" 
          className={`text-xs px-2 md:px-3 py-1 rounded-full ${changeColor} border-0`}
        >
          {change}
        </Badge>
      </CardContent>
    </Card>
  );
}