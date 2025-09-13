import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Clock, UserCheck, AlertTriangle, FileText, ChevronLeft, ChevronRight } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "appointment",
    patient: "Sarah Johnson",
    action: "Completed consultation",
    time: "2 minutes ago",
    priority: "normal",
    icon: UserCheck,
    details: "Follow-up scheduled for next week. Patient responded well to treatment."
  },
  {
    id: 2,
    type: "urgent",
    patient: "Michael Chen",
    action: "Emergency admission - Chest pain",
    time: "15 minutes ago",
    priority: "urgent",
    icon: AlertTriangle,
    details: "Transferred to CCU. Vitals stable. Cardiologist consulted."
  },
  {
    id: 3,
    type: "lab",
    patient: "Emma Wilson",
    action: "Lab results available",
    time: "1 hour ago",
    priority: "normal",
    icon: FileText,
    details: "Blood work shows improvement. Cholesterol levels within normal range."
  },
  {
    id: 4,
    type: "appointment",
    patient: "David Brown",
    action: "Scheduled follow-up",
    time: "2 hours ago",
    priority: "normal",
    icon: Clock,
    details: "Post-operative check scheduled for Friday. Recovery progressing well."
  },
  {
    id: 5,
    type: "urgent",
    patient: "Lisa Martinez",
    action: "Surgery prep required",
    time: "3 hours ago",
    priority: "urgent",
    icon: AlertTriangle,
    details: "Pre-operative assessment completed. Surgery scheduled for 8:00 AM tomorrow."
  },
  {
    id: 6,
    type: "lab",
    patient: "Robert Taylor",
    action: "Critical lab values",
    time: "4 hours ago",
    priority: "urgent",
    icon: FileText,
    details: "Glucose levels critically high. Patient contacted, insulin adjusted."
  }
];

export function ActivityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(activities.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const currentActivities = activities.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Recent Patient Activities</h2>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="h-8 w-8 border-gray-300 hover:bg-gray-100 rounded-lg transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </Button>
          <span className="text-sm text-gray-500 px-3">
            {currentIndex + 1} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="h-8 w-8 border-gray-300 hover:bg-gray-100 rounded-lg transition-all duration-200"
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentActivities.map((activity) => {
          const Icon = activity.icon;
          return (
            <Card key={activity.id} className="modern-card border-gray-200 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gray-100 text-gray-700 font-medium">
                        {activity.patient.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base font-semibold text-gray-900">{activity.patient}</CardTitle>
                      <div className="flex items-center mt-1">
                        <Icon className="h-3 w-3 text-gray-500 mr-1" />
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={activity.priority === "urgent" ? "destructive" : "secondary"}
                    className={`text-xs px-2 py-1 rounded ${
                      activity.priority === "urgent" 
                        ? "bg-red-100 text-red-700" 
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {activity.priority}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium text-gray-900 text-sm">{activity.action}</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {activity.details}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`h-2 w-2 p-0 rounded-full transition-all duration-200 ${
              currentIndex === index 
                ? "bg-gray-900" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}