import { Button } from "./ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { 
  Home, 
  Activity, 
  Clock, 
  Calendar, 
  Users, 
  Heart, 
  ChevronDown,
  BarChart3
} from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "activities", label: "Recent Activities", icon: Clock },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ];

  const quickActions = [
    { label: "Schedule Appointment", icon: Calendar },
    { label: "Add New Patient", icon: Users },
    { label: "View Lab Results", icon: Activity },
    { label: "Emergency Protocols", icon: Heart },
    { label: "Shift Schedule", icon: Clock },
  ];

  return (
    <nav className="border-b bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant="ghost"
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${
                    activeTab === tab.id 
                      ? "bg-neutral-900 text-white" 
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </Button>
              );
            })}
          </div>

          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="flex items-center space-x-2 border-neutral-200 hover:bg-neutral-50"
                >
                  <span>Quick Actions</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                sideOffset={8}
                className="w-52 bg-white border rounded-xl p-2"
              >
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <DropdownMenuItem 
                      key={index} 
                      className="flex items-center gap-3 px-3 py-2 text-sm cursor-pointer rounded-lg hover:bg-neutral-100"
                      onClick={() => {
                        console.log(`Clicked: ${action.label}`);
                        // Add actual action handler here
                      }}
                    >
                      <Icon className="h-4 w-4 text-neutral-500" />
                      <span>{action.label}</span>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}