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
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-neutral-900 p-2 rounded-xl">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-medium">MedCare Dashboard</h1>
                <p className="text-sm text-neutral-600">St. Mary's General Hospital</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500 text-white">
                  3
                </Badge>
              </Button>
              
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-neutral-100 text-neutral-900 text-sm">DS</AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">Dr. Sarah Smith</p>
                  <p className="text-xs text-neutral-600">Cardiology</p>
                </div>
              </div>
              
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Welcome Section */}
          <div className="bg-white rounded-2xl p-8 border">
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-medium mb-1">Good Afternoon, Dr. Smith</h2>
                  <p className="text-neutral-600">You have 8 appointments and 3 surgeries scheduled for today</p>
                </div>
                <div className="flex items-center space-x-6 text-sm">
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
              <div className="hidden md:block text-right">
                <p className="text-3xl font-light text-neutral-900">13</p>
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