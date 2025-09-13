import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Clock, UserCheck, AlertTriangle, FileText } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "appointment",
    patient: "Sarah Johnson",
    action: "Completed consultation",
    time: "2 minutes ago",
    priority: "normal",
    icon: UserCheck,
  },
  {
    id: 2,
    type: "urgent",
    patient: "Michael Chen",
    action: "Emergency admission - Chest pain",
    time: "15 minutes ago",
    priority: "urgent",
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: "lab",
    patient: "Emma Wilson",
    action: "Lab results available",
    time: "1 hour ago",
    priority: "normal",
    icon: FileText,
  },
  {
    id: 4,
    type: "appointment",
    patient: "David Brown",
    action: "Scheduled follow-up",
    time: "2 hours ago",
    priority: "normal",
    icon: Clock,
  },
  {
    id: 5,
    type: "urgent",
    patient: "Lisa Martinez",
    action: "Surgery prep required",
    time: "3 hours ago",
    priority: "urgent",
    icon: AlertTriangle,
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-700">
                    {activity.patient.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{activity.patient}</p>
                    <Badge
                      variant={activity.priority === "urgent" ? "destructive" : "secondary"}
                      className="ml-2 text-xs"
                    >
                      {activity.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{activity.action}</p>
                  <div className="flex items-center mt-1">
                    <Icon className="h-3 w-3 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}