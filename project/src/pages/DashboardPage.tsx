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
          {/* Today's Overview Section */}
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

          {/* Timeline Section */}
          <div className="bg-white rounded-2xl p-4 md:p-8 border">
            <h3 className="text-lg md:text-xl font-medium mb-4">Appointment Timeline</h3>
            <div className="relative">
              <svg width="100%" height="80" className="w-full">
                <defs>
                  <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d1d5db" />
                    <stop offset="30%" stopColor="#3b82f6" />
                    <stop offset="60%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                <rect x="0" y="30" width="100%" height="4" fill="url(#timelineGradient)" rx="2"/>
                
                {/* Timeline markers */}
                <circle cx="15%" cy="32" r="6" fill="#3b82f6" />
                <circle cx="35%" cy="32" r="6" fill="#10b981" />
                <circle cx="55%" cy="32" r="6" fill="#f59e0b" />
                <circle cx="75%" cy="32" r="6" fill="#ef4444" />
                
                {/* Time labels */}
                <text x="15%" y="55" textAnchor="middle" className="text-xs fill-neutral-600">9:00 AM</text>
                <text x="35%" y="55" textAnchor="middle" className="text-xs fill-neutral-600">11:30 AM</text>
                <text x="55%" y="55" textAnchor="middle" className="text-xs fill-neutral-600">2:30 PM</text>
                <text x="75%" y="55" textAnchor="middle" className="text-xs fill-neutral-600">4:00 PM</text>
                
                {/* Patient labels */}
                <text x="15%" y="15" textAnchor="middle" className="text-xs fill-neutral-800 font-medium">Maria Garcia</text>
                <text x="35%" y="15" textAnchor="middle" className="text-xs fill-neutral-800 font-medium">Robert Chen</text>
                <text x="55%" y="15" textAnchor="middle" className="text-xs fill-neutral-800 font-medium">John Anderson</text>
                <text x="75%" y="15" textAnchor="middle" className="text-xs fill-neutral-800 font-medium">Surgery Prep</text>
              </svg>
            </div>
          </div>

          {/* Two-column layout for remaining sections */}
          <div className="bg-white rounded-2xl p-4 md:p-8 border">
            <h3 className="text-lg md:text-xl font-medium mb-4">Today's Appointments</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Maria Garcia</p>
                    <p className="text-sm text-neutral-600">Annual Checkup</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-neutral-900">9:00 AM</p>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">Confirmed</Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Robert Chen</p>
                    <p className="text-sm text-neutral-600">Follow-up</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-neutral-900">11:30 AM</p>
                  <Badge className="bg-green-100 text-green-800 text-xs">Arrived</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Tab content based on active tab */}
          {renderTabContent()}

          <div className="bg-white rounded-2xl p-4 md:p-8 border">
            <h3 className="text-lg md:text-xl font-medium mb-4">Active Studies & Protocols</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xs font-bold">CS</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Cardiac Study Protocol</p>
                    <p className="text-sm text-neutral-600">Phase II Clinical Trial</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-neutral-600">15 participants</p>
                  <Badge className="bg-purple-100 text-purple-800 text-xs">Active</Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl border">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-xs font-bold">DM</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Diabetes Management</p>
                    <p className="text-sm text-neutral-600">Lifestyle Intervention Study</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-neutral-600">8 participants</p>
                  <Badge className="bg-orange-100 text-orange-800 text-xs">Recruiting</Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 md:p-8 border">
            <h3 className="text-lg md:text-xl font-medium mb-4">Patient Notes & Updates</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xs font-bold">MG</span>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">Maria Garcia</p>
                        <p className="text-xs text-neutral-600">Last updated: 30 mins ago</p>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-700 mb-2">
                      Blood pressure readings improved significantly. Continue current medication regimen. 
                      Patient reports better sleep quality and reduced fatigue.
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-neutral-600">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">BP: Normal</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Sleep: Improved</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl border">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs font-bold">RC</span>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">Robert Chen</p>
                        <p className="text-xs text-neutral-600">Last updated: 2 hours ago</p>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-700 mb-2">
                      Post-surgical recovery progressing well. Wound healing on schedule. 
                      Patient cleared for light physical activity. Next follow-up in 2 weeks.
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-neutral-600">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Recovery: Good</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Wound: Healing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-8 border">
            <h3 className="text-lg md:text-xl font-medium mb-4">Lab Results & Diagnostics</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-medium text-neutral-900">Comprehensive Metabolic Panel</p>
                    <p className="text-sm text-neutral-600">Maria Garcia • Ordered: Dec 12, 2024</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 text-xs">Results Ready</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-600">Glucose</p>
                    <p className="font-medium text-green-600">95 mg/dL ✓</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Creatinine</p>
                    <p className="font-medium text-green-600">0.8 mg/dL ✓</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Sodium</p>
                    <p className="font-medium text-green-600">140 mEq/L ✓</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Potassium</p>
                    <p className="font-medium text-orange-600">3.4 mEq/L ⚠</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-medium text-neutral-900">Cardiac Enzymes</p>
                    <p className="text-sm text-neutral-600">Robert Chen • Ordered: Dec 11, 2024</p>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800 text-xs">Pending</Badge>
                </div>
                <p className="text-sm text-neutral-600">Expected results: Today 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* AI Chat Integration */}
      <AIChat />
    </div>
  );
}
