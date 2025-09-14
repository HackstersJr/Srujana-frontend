import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { OverviewTab } from "../components/OverviewTab";
import { ActivityCarousel } from "../components/ActivityCarousel";
import { AnalyticsTab } from "../components/AnalyticsTab";
import { AIChat } from "../components/AIChat";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { 
  Clock,
  Stethoscope,
  Users,
  Bell,
  Settings
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      case "activities":
        return <ActivityCarousel />;
      case "analytics":
        return <AnalyticsTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="px-4 md:px-8 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="bg-neutral-900 p-2 rounded-xl">
                <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div>
                <h1 className="text-base md:text-lg font-medium">MedCare Dashboard</h1>
                <p className="text-sm text-neutral-600">St. Mary's General Hospital</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-6">
              <Button variant="ghost" size="icon" className="relative h-8 w-8 md:h-10 md:w-10">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-3 w-3 md:h-4 md:w-4 p-0 text-xs bg-red-500 text-white">
                  3
                </Badge>
              </Button>
              
              <div className="flex items-center space-x-3">
                <Avatar className="h-7 w-7 md:h-8 md:w-8">
                  <AvatarFallback className="bg-neutral-100 text-neutral-900 text-xs md:text-sm">DS</AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">Dr. Sarah Smith</p>
                  <p className="text-xs text-neutral-600">Cardiology</p>
                </div>
              </div>
              
              <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          {/* Welcome Section */}
          <div className="bg-white rounded-2xl p-4 md:p-8 border">
            <div className="flex flex-col lg:flex-row items-start justify-between space-y-4 lg:space-y-0">
              <div className="space-y-4 flex-1">
                <div>
                  <h2 className="text-xl md:text-2xl font-medium mb-1">Good Afternoon, Dr. Smith</h2>
                  <p className="text-neutral-600 text-sm md:text-base">You have 8 appointments and 3 surgeries scheduled for today</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                  <div className="flex items-center space-x-2 text-neutral-700">
                    <Clock className="h-4 w-4" />
                    <span>Next: 2:30 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-700">
                    <Users className="h-4 w-4" />
                    <span>John Anderson</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block text-right">
                <p className="text-2xl md:text-3xl font-light text-neutral-900">13</p>
                <p className="text-sm text-neutral-600">September</p>
                <p className="text-xs text-neutral-500">Saturday</p>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          {renderTabContent()}
        </div>
      </main>

      {/* AI Chat Component */}
      <AIChat />
    </div>
  );
}