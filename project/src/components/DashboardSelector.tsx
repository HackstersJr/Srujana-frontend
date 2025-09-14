import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { 
  Stethoscope, 
  Pill, 
  Warehouse, 
  Shield, 
  UserCheck,
  TrendingUp,
  BarChart3,
  Users
} from "lucide-react";

interface DashboardOption {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  route: string;
  color: string;
  bgColor: string;
}

const dashboardOptions: DashboardOption[] = [
  {
    id: "nurse",
    title: "Nurse Dashboard",
    description: "Patient care, medication management, monitoring, and staff coordination",
    icon: UserCheck,
    route: "/nurse-dashboard",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    id: "chemist",
    title: "Pharmacy Dashboard", 
    description: "Medication inventory, dispensing, safety monitoring, and supply logistics",
    icon: Pill,
    route: "/chemist-dashboard",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description: "Multi-facility stock control, supply chain coordination, and equipment tracking",
    icon: Warehouse,
    route: "/inventory-dashboard",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    id: "admin",
    title: "Administrative Dashboard",
    description: "Predictive staffing, compliance monitoring, analytics, and facility management",
    icon: Shield,
    route: "/admin-dashboard",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  }
];

export function DashboardSelector() {
  const navigate = useNavigate();

  const handleDashboardSelect = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-neutral-900 p-2 rounded-xl">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-neutral-900">CareCloud Platform</h1>
              <p className="text-neutral-600">Select your specialized dashboard</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-4 rounded-xl border text-center">
              <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-neutral-900">98.2%</p>
              <p className="text-sm text-neutral-600">System Uptime</p>
            </div>
            <div className="bg-white p-4 rounded-xl border text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-neutral-900">1,247</p>
              <p className="text-sm text-neutral-600">Active Staff</p>
            </div>
            <div className="bg-white p-4 rounded-xl border text-center">
              <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-neutral-900">$2.3M</p>
              <p className="text-sm text-neutral-600">Cost Savings</p>
            </div>
            <div className="bg-white p-4 rounded-xl border text-center">
              <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-neutral-900">97.8%</p>
              <p className="text-sm text-neutral-600">Compliance</p>
            </div>
          </div>
        </div>

        {/* Dashboard Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboardOptions.map((option) => {
            const Icon = option.icon;
            return (
              <Card 
                key={option.id} 
                className="p-6 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer border-2 hover:border-neutral-300"
                onClick={() => handleDashboardSelect(option.route)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${option.bgColor}`}>
                    <Icon className={`h-6 w-6 ${option.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                      {option.description}
                    </p>
                    <Button 
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDashboardSelect(option.route);
                      }}
                    >
                      Access Dashboard
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Access */}
        <div className="mt-12 bg-white rounded-xl border p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
              <UserCheck className="h-6 w-6 mb-2 text-blue-600" />
              <span className="text-sm">Patient Records</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
              <Pill className="h-6 w-6 mb-2 text-green-600" />
              <span className="text-sm">Medication Orders</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
              <BarChart3 className="h-6 w-6 mb-2 text-purple-600" />
              <span className="text-sm">Analytics</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
              <Shield className="h-6 w-6 mb-2 text-orange-600" />
              <span className="text-sm">Compliance</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}