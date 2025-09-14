import { useState } from "react";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { AIChat } from "../components/AIChat";
import { 
  Shield,
  Users,
  Bell,
  Search,
  Filter,
  AlertTriangle,
  XCircle,
  Calendar,
  Activity,
  TrendingUp,
  TrendingDown,
  PieChart,
  FileText,
  DollarSign,
  Target,
  Building,
  UserCheck,
  Brain,
  Gauge,
  AlertCircle,
  CheckSquare,
  Globe,
  Monitor,
  Layers,
  Award,
  BookOpen,
  LineChart,
  Phone,
  MapPin,
  Settings  // added Settings
} from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("all");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewContent />;
      case "staffing":
        return <PredictiveStaffing />;
      case "compliance":
        return <ComplianceReports />;
      case "analytics":
        return <OperationalAnalytics />;
      case "facilities":
        return <FacilityManagement />;
      default:
        return <OverviewContent />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="px-4 md:px-8 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-600 p-2 rounded-xl">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div>
                <h1 className="text-base md:text-lg font-medium">Administrative Dashboard</h1>
                <p className="text-sm text-neutral-600">Healthcare Operations Control Center</p>
              </div>
            </div>
            
            {/* Search and Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
              {/* Search Bar */}
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <Input
                  placeholder="Search reports, staff, metrics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              
              {/* Department Filter */}
              <Select value={filterDepartment} onValueChange={setFilterDepartment}>
                <SelectTrigger className="w-full sm:w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="compliance">Compliance</SelectItem>
                  <SelectItem value="it">IT Systems</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Critical Alerts */}
              <Button size="icon" variant="outline" className="relative h-8 w-8 md:h-10 md:w-10">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-3 w-3 md:h-4 md:w-4 p-0 text-xs bg-red-500 text-white">
                  5
                </Badge>
              </Button>
              
              {/* Profile */}
              <div className="flex items-center space-x-3">
                <Avatar className="h-7 w-7 md:h-8 md:w-8">
                  <AvatarFallback className="bg-purple-100 text-purple-900 text-xs md:text-sm">AD</AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">Dr. Admin</p>
                  <p className="text-xs text-neutral-600">Administrator</p>
                </div>
              </div>
              {/* Settings Button */}
              <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b sticky top-0 z-30">
        <div className="px-4 md:px-8">
          <div className="flex space-x-1 md:space-x-8 overflow-x-auto">
            {[
              { id: "overview", label: "Overview", icon: Monitor },
              { id: "staffing", label: "Staffing", icon: Brain },
              { id: "compliance", label: "Compliance", icon: CheckSquare },
              { id: "analytics", label: "Analytics", icon: LineChart },
              { id: "facilities", label: "Facilities", icon: Building }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-3 md:py-4 border-b-2 whitespace-nowrap px-2 md:px-0 ${
                  activeTab === tab.id
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-neutral-600 hover:text-neutral-800"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="font-medium text-sm md:text-base">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          {renderTabContent()}
        </div>
      </main>
      {/* Global AI Chat Integration */}
      <AIChat />
    </div>
  );
}

// Overview Content Component
function OverviewContent() {
  return (
    <div className="space-y-6">
      {/* Executive Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Overall Efficiency</p>
              <p className="text-2xl font-bold text-green-600">96.2%</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +3.2% vs last month
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <Gauge className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Staff Utilization</p>
              <p className="text-2xl font-bold text-blue-600">89%</p>
              <p className="text-xs text-blue-600 flex items-center mt-1">
                <Users className="h-3 w-3 mr-1" />
                Optimal staffing levels
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-xl">
              <UserCheck className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Compliance Score</p>
              <p className="text-2xl font-bold text-purple-600">98.7%</p>
              <p className="text-xs text-purple-600 flex items-center mt-1">
                <CheckSquare className="h-3 w-3 mr-1" />
                All audits passing
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Cost Optimization</p>
              <p className="text-2xl font-bold text-orange-600">$2.3M</p>
              <p className="text-xs text-orange-600 flex items-center mt-1">
                <DollarSign className="h-3 w-3 mr-1" />
                Saved this quarter
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Facility Operations Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-neutral-900">Multi-Facility Operations</h3>
              <Button size="sm" variant="outline">
                <Globe className="h-4 w-4 mr-2" />
                View All Sites
              </Button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {[
              { 
                name: "Main Hospital", 
                status: "optimal", 
                capacity: 450, 
                occupied: 387, 
                staff: 245,
                alerts: 2
              },
              { 
                name: "North Campus", 
                status: "high", 
                capacity: 200, 
                occupied: 189, 
                staff: 124,
                alerts: 5
              },
              { 
                name: "Emergency Center", 
                status: "critical", 
                capacity: 80, 
                occupied: 78, 
                staff: 45,
                alerts: 8
              },
              { 
                name: "Outpatient Clinic", 
                status: "good", 
                capacity: 120, 
                occupied: 67, 
                staff: 34,
                alerts: 1
              }
            ].map((facility, idx) => (
              <div key={idx} className="p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      facility.status === 'optimal' ? 'bg-green-500' :
                      facility.status === 'good' ? 'bg-blue-500' :
                      facility.status === 'high' ? 'bg-orange-500' : 'bg-red-500'
                    }`}></div>
                    <span className="font-medium text-neutral-900">{facility.name}</span>
                  </div>
                  {facility.alerts > 0 && (
                    <Badge variant="destructive">{facility.alerts} alerts</Badge>
                  )}
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-600">Capacity</p>
                    <p className="font-semibold">{Math.round((facility.occupied/facility.capacity) * 100)}%</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Beds</p>
                    <p className="font-semibold">{facility.occupied}/{facility.capacity}</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Staff</p>
                    <p className="font-semibold">{facility.staff}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-neutral-900">Real-time Performance Metrics</h3>
          </div>
          <div className="p-6 space-y-4">
            {[
              { 
                metric: "Average Patient Wait Time", 
                value: "12 min", 
                target: "15 min",
                trend: "down",
                status: "good"
              },
              { 
                metric: "Bed Turnover Rate", 
                value: "2.3 hrs", 
                target: "3.0 hrs",
                trend: "down",
                status: "excellent"
              },
              { 
                metric: "Staff Response Time", 
                value: "3.2 min", 
                target: "5.0 min",
                trend: "steady",
                status: "good"
              },
              { 
                metric: "Emergency Readiness", 
                value: "98%", 
                target: "95%",
                trend: "up",
                status: "excellent"
              },
              { 
                metric: "Equipment Uptime", 
                value: "99.1%", 
                target: "98%",
                trend: "up",
                status: "excellent"
              },
              { 
                metric: "Patient Satisfaction", 
                value: "4.7/5", 
                target: "4.5/5",
                trend: "up",
                status: "excellent"
              }
            ].map((metric, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    metric.status === 'excellent' ? 'bg-green-500' :
                    metric.status === 'good' ? 'bg-blue-500' : 'bg-orange-500'
                  }`}></div>
                  <div>
                    <p className="font-medium text-neutral-900">{metric.metric}</p>
                    <p className="text-sm text-neutral-600">Target: {metric.target}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-neutral-900">{metric.value}</span>
                    {metric.trend === 'up' ? 
                      <TrendingUp className="h-4 w-4 text-green-600" /> :
                      metric.trend === 'down' ? 
                      <TrendingDown className="h-4 w-4 text-green-600" /> :
                      <Activity className="h-4 w-4 text-neutral-400" />
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Critical Alerts Dashboard */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Critical System Alerts</h3>
                <p className="text-sm text-neutral-600">Requires immediate administrative attention</p>
              </div>
            </div>
            <Button variant="outline">
              View All Alerts
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                type: "Staff Shortage",
                facility: "North Campus ICU",
                severity: "critical",
                time: "2 mins ago",
                action: "Deploy emergency staff"
              },
              {
                type: "Equipment Failure",
                facility: "Main Hospital OR-3",
                severity: "high",
                time: "8 mins ago",
                action: "Maintenance dispatched"
              },
              {
                type: "Compliance Issue",
                facility: "Emergency Center",
                severity: "medium",
                time: "15 mins ago",
                action: "Review required"
              }
            ].map((alert, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={alert.severity === 'critical' ? 'destructive' : 
                    alert.severity === 'high' ? 'default' : 'secondary'}>
                    {alert.type}
                  </Badge>
                  <span className="text-xs text-neutral-500">{alert.time}</span>
                </div>
                <p className="font-medium text-neutral-900 mb-1">{alert.facility}</p>
                <p className="text-sm text-neutral-600 mb-3">{alert.action}</p>
                <Button size="sm" className="w-full">
                  Take Action
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Predictive Staffing Component
function PredictiveStaffing() {
  return (
    <div className="space-y-6">
      {/* Staffing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Active Staff</p>
              <p className="text-2xl font-bold text-neutral-900">1,247</p>
              <p className="text-xs text-blue-600">Across all facilities</p>
            </div>
            <Users className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Predicted Shortage</p>
              <p className="text-2xl font-bold text-orange-600">23</p>
              <p className="text-xs text-orange-600">Next 24 hours</p>
            </div>
            <AlertTriangle className="h-6 w-6 text-orange-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Overtime Cost</p>
              <p className="text-2xl font-bold text-red-600">$45K</p>
              <p className="text-xs text-red-600">This month</p>
            </div>
            <DollarSign className="h-6 w-6 text-red-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">AI Accuracy</p>
              <p className="text-2xl font-bold text-green-600">94.2%</p>
              <p className="text-xs text-green-600">Prediction score</p>
            </div>
            <Brain className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Inflow-based Staff Scheduling */}
      <div className="bg-white rounded-xl border">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-neutral-900">Inflow-based Staff Scheduling (Next 48 Hours)</h3>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                <Brain className="h-4 w-4 mr-2" />
                AI Insights
              </Button>
              <Button size="sm">
                <UserCheck className="h-4 w-4 mr-2" />
                Auto-Schedule
              </Button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Patient Inflow Predictions */}
            <div className="space-y-4">
              <h4 className="font-medium text-neutral-800">Predicted Patient Inflow</h4>
              {[
                { 
                  time: "Today 2-6 PM", 
                  department: "Emergency", 
                  predicted: 45, 
                  current_staff: 12, 
                  needed_staff: 18,
                  confidence: 92
                },
                { 
                  time: "Today 6-10 PM", 
                  department: "ICU", 
                  predicted: 8, 
                  current_staff: 15, 
                  needed_staff: 12,
                  confidence: 87
                },
                { 
                  time: "Tomorrow 8-12 AM", 
                  department: "Surgery", 
                  predicted: 25, 
                  current_staff: 8, 
                  needed_staff: 15,
                  confidence: 95
                },
                { 
                  time: "Tomorrow 2-6 PM", 
                  department: "Pediatrics", 
                  predicted: 32, 
                  current_staff: 6, 
                  needed_staff: 12,
                  confidence: 89
                }
              ].map((prediction, idx) => (
                <div key={idx} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        prediction.needed_staff > prediction.current_staff ? 'bg-red-500' :
                        prediction.needed_staff < prediction.current_staff ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <div>
                        <span className="font-medium text-neutral-900">{prediction.department}</span>
                        <p className="text-sm text-neutral-600">{prediction.time}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{prediction.confidence}% confidence</Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-neutral-600">Predicted Patients</p>
                      <p className="font-semibold text-blue-600">{prediction.predicted}</p>
                    </div>
                    <div>
                      <p className="text-neutral-600">Current Staff</p>
                      <p className="font-semibold">{prediction.current_staff}</p>
                    </div>
                    <div>
                      <p className="text-neutral-600">Needed Staff</p>
                      <p className={`font-semibold ${
                        prediction.needed_staff > prediction.current_staff ? 'text-red-600' : 'text-green-600'
                      }`}>{prediction.needed_staff}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Staff Allocation Recommendations */}
            <div className="space-y-4">
              <h4 className="font-medium text-neutral-800">AI-Powered Recommendations</h4>
              <div className="space-y-3">
                {[
                  {
                    action: "Call in 6 nurses",
                    department: "Emergency",
                    time: "By 1:30 PM today",
                    reason: "Expected 45-patient surge",
                    priority: "critical",
                    cost: "$1,200"
                  },
                  {
                    action: "Reassign 3 staff members",
                    department: "ICU → Pediatrics", 
                    time: "Tomorrow 1:00 PM",
                    reason: "Higher pediatric inflow predicted",
                    priority: "high",
                    cost: "$0"
                  },
                  {
                    action: "Schedule overtime",
                    department: "Surgery",
                    time: "Tomorrow 7:00 AM",
                    reason: "7 additional surgeries scheduled",
                    priority: "medium",
                    cost: "$800"
                  },
                  {
                    action: "On-call activation",
                    department: "Cardiology",
                    time: "Standby mode",
                    reason: "Weather-related incident potential",
                    priority: "low",
                    cost: "$200"
                  }
                ].map((rec, idx) => (
                  <div key={idx} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          rec.priority === 'critical' ? 'bg-red-500' :
                          rec.priority === 'high' ? 'bg-orange-500' :
                          rec.priority === 'medium' ? 'bg-blue-500' : 'bg-green-500'
                        }`}></div>
                        <span className="font-medium text-neutral-900">{rec.action}</span>
                      </div>
                      <Badge variant={rec.priority === 'critical' ? 'destructive' : 'outline'}>
                        {rec.cost}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-neutral-600"><strong>Department:</strong> {rec.department}</p>
                      <p className="text-neutral-600"><strong>Timing:</strong> {rec.time}</p>
                      <p className="text-neutral-600"><strong>Reason:</strong> {rec.reason}</p>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <Button size="sm" variant="outline">Schedule</Button>
                      <Button size="sm">Execute Now</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Compliance Reports Component
function ComplianceReports() {
  return (
    <div className="space-y-6">
      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Overall Compliance</p>
              <p className="text-2xl font-bold text-green-600">98.7%</p>
              <p className="text-xs text-green-600">Above target</p>
            </div>
            <CheckSquare className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Active Audits</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-xs text-blue-600">In progress</p>
            </div>
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Violations</p>
              <p className="text-2xl font-bold text-orange-600">3</p>
              <p className="text-xs text-orange-600">Pending resolution</p>
            </div>
            <XCircle className="h-6 w-6 text-orange-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Next Audit</p>
              <p className="text-2xl font-bold text-purple-600">7</p>
              <p className="text-xs text-purple-600">days</p>
            </div>
            <Calendar className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Compliance Reports Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-neutral-900">Regulatory Compliance Status</h3>
              <Button size="sm" variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {[
              { 
                regulation: "HIPAA Privacy Rules", 
                status: "compliant", 
                score: 100, 
                last_audit: "Nov 15, 2024",
                next_review: "Feb 15, 2025"
              },
              { 
                regulation: "Joint Commission Standards", 
                status: "compliant", 
                score: 97, 
                last_audit: "Oct 22, 2024",
                next_review: "Jan 22, 2025"
              },
              { 
                regulation: "OSHA Safety Requirements", 
                status: "minor_issues", 
                score: 94, 
                last_audit: "Nov 30, 2024",
                next_review: "Dec 30, 2024"
              },
              { 
                regulation: "CMS Quality Measures", 
                status: "compliant", 
                score: 98, 
                last_audit: "Dec 01, 2024",
                next_review: "Mar 01, 2025"
              },
              { 
                regulation: "FDA Drug Safety", 
                status: "action_required", 
                score: 89, 
                last_audit: "Nov 28, 2024",
                next_review: "Dec 15, 2024"
              }
            ].map((compliance, idx) => (
              <div key={idx} className="p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      compliance.status === 'compliant' ? 'bg-green-500' :
                      compliance.status === 'minor_issues' ? 'bg-orange-500' : 'bg-red-500'
                    }`}></div>
                    <span className="font-medium text-neutral-900">{compliance.regulation}</span>
                  </div>
                  <Badge variant={compliance.status === 'compliant' ? 'default' :
                    compliance.status === 'minor_issues' ? 'secondary' : 'destructive'}>
                    {compliance.score}%
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-600">Last Audit</p>
                    <p className="font-medium">{compliance.last_audit}</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Next Review</p>
                    <p className="font-medium">{compliance.next_review}</p>
                  </div>
                </div>
                
                {compliance.status !== 'compliant' && (
                  <div className="mt-3">
                    <Button size="sm" variant="outline" className="w-full">
                      View Action Plan
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-neutral-900">Audit Schedule & Progress</h3>
          </div>
          <div className="p-6 space-y-4">
            {[
              {
                audit: "Annual HIPAA Review",
                auditor: "Internal Compliance Team",
                date: "Dec 15, 2024",
                status: "scheduled",
                progress: 0,
                departments: ["IT", "Medical Records", "Billing"]
              },
              {
                audit: "Joint Commission Survey",
                auditor: "External - Joint Commission",
                date: "Jan 22, 2025",
                status: "preparing",
                progress: 65,
                departments: ["All Departments"]
              },
              {
                audit: "Pharmacy Compliance Check",
                auditor: "State Board of Pharmacy",
                date: "Dec 20, 2024",
                status: "in_progress",
                progress: 40,
                departments: ["Pharmacy", "ICU", "Emergency"]
              },
              {
                audit: "Safety Protocol Review",
                auditor: "OSHA Inspector",
                date: "Completed",
                status: "completed",
                progress: 100,
                departments: ["Maintenance", "Laboratory", "Surgery"]
              }
            ].map((audit, idx) => (
              <div key={idx} className="p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-medium text-neutral-900">{audit.audit}</span>
                    <p className="text-sm text-neutral-600">{audit.auditor}</p>
                  </div>
                  <Badge variant={audit.status === 'completed' ? 'default' :
                    audit.status === 'in_progress' ? 'secondary' : 'outline'}>
                    {audit.status.replace('_', ' ')}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Date: {audit.date}</span>
                    <span className="font-medium">{audit.progress}%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        audit.status === 'completed' ? 'bg-green-500' :
                        audit.status === 'in_progress' ? 'bg-blue-500' : 'bg-neutral-300'
                      }`}
                      style={{ width: `${audit.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Departments: {audit.departments.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Operational Analytics Component
function OperationalAnalytics() {
  return (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Patient Satisfaction</p>
              <p className="text-2xl font-bold text-green-600">4.7/5</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +0.3 vs last month
              </p>
            </div>
            <Award className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Revenue Growth</p>
              <p className="text-2xl font-bold text-blue-600">+12.5%</p>
              <p className="text-xs text-blue-600">Year over year</p>
            </div>
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Cost per Patient</p>
              <p className="text-2xl font-bold text-orange-600">$3,247</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingDown className="h-3 w-3 mr-1" />
                -8% reduction
              </p>
            </div>
            <DollarSign className="h-6 w-6 text-orange-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Readmission Rate</p>
              <p className="text-2xl font-bold text-purple-600">7.2%</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingDown className="h-3 w-3 mr-1" />
                -2.1% improvement
              </p>
            </div>
            <Target className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Cost & Wastage Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-neutral-900">Cost Analysis & Optimization</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">$2.3M</p>
                <p className="text-sm text-green-700">Total Savings</p>
                <p className="text-xs text-neutral-600">This quarter</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="text-2xl font-bold text-red-600">$456K</p>
                <p className="text-sm text-red-700">Waste Prevented</p>
                <p className="text-xs text-neutral-600">This quarter</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-neutral-800">Cost Optimization Areas</h4>
              {[
                { area: "Supply Chain Efficiency", savings: "$890K", percentage: 38 },
                { area: "Energy Management", savings: "$567K", percentage: 25 },
                { area: "Staff Optimization", savings: "$445K", percentage: 19 },
                { area: "Equipment Utilization", savings: "$234K", percentage: 10 },
                { area: "Waste Reduction", savings: "$189K", percentage: 8 }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-700">{item.area}</span>
                    <span className="text-sm font-semibold text-green-600">{item.savings}</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-green-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-neutral-500">{item.percentage}% of total savings</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-neutral-900">Operational Efficiency Trends</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">96.2%</p>
                <p className="text-sm text-blue-700">Overall Efficiency</p>
                <p className="text-xs text-neutral-600">Target: 92%</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">2.1 hrs</p>
                <p className="text-sm text-purple-700">Avg Response Time</p>
                <p className="text-xs text-neutral-600">Target: 3.0 hrs</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-neutral-800">Key Performance Indicators</h4>
              {[
                { 
                  kpi: "Bed Turnover Rate", 
                  current: 94, 
                  target: 90, 
                  trend: "up",
                  improvement: "+4%"
                },
                { 
                  kpi: "Emergency Response Time", 
                  current: 89, 
                  target: 85, 
                  trend: "up",
                  improvement: "+6%"
                },
                { 
                  kpi: "Patient Flow Efficiency", 
                  current: 92, 
                  target: 88, 
                  trend: "up",
                  improvement: "+8%"
                },
                { 
                  kpi: "Resource Utilization", 
                  current: 87, 
                  target: 82, 
                  trend: "steady",
                  improvement: "+2%"
                },
                { 
                  kpi: "Quality Score", 
                  current: 96, 
                  target: 92, 
                  trend: "up",
                  improvement: "+5%"
                }
              ].map((kpi, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-700">{kpi.kpi}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-neutral-900">{kpi.current}%</span>
                      <span className={`text-xs ${kpi.trend === 'up' ? 'text-green-600' : 'text-neutral-500'}`}>
                        {kpi.improvement}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${kpi.current >= kpi.target ? 'bg-green-500' : 'bg-orange-500'}`}
                      style={{ width: `${kpi.current}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>Target: {kpi.target}%</span>
                    <span>{kpi.trend === 'up' ? '↑' : kpi.trend === 'down' ? '↓' : '→'} Trending {kpi.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Facility Management Component
function FacilityManagement() {
  return (
    <div className="space-y-6">
      {/* Facility Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Total Facilities</p>
              <p className="text-2xl font-bold text-neutral-900">8</p>
              <p className="text-xs text-green-600">All operational</p>
            </div>
            <Building className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Total Capacity</p>
              <p className="text-2xl font-bold text-neutral-900">1,250</p>
              <p className="text-xs text-blue-600">Beds across facilities</p>
            </div>
            <Layers className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Occupancy Rate</p>
              <p className="text-2xl font-bold text-orange-600">87%</p>
              <p className="text-xs text-orange-600">System-wide average</p>
            </div>
            <PieChart className="h-6 w-6 text-orange-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Maintenance Alerts</p>
              <p className="text-2xl font-bold text-red-600">15</p>
              <p className="text-xs text-red-600">Requires attention</p>
            </div>
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
        </div>
      </div>

      {/* Multi-Facility Status Dashboard */}
      <div className="bg-white rounded-xl border">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-neutral-900">Multi-Facility Status Dashboard</h3>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                <MapPin className="h-4 w-4 mr-2" />
                Map View
              </Button>
              <Button size="sm">
                <Activity className="h-4 w-4 mr-2" />
                Real-time Monitor
              </Button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Facility Status Cards */}
            <div className="space-y-4">
              {[
                {
                  name: "Main Hospital Campus",
                  location: "Downtown",
                  status: "optimal",
                  capacity: 450,
                  occupied: 387,
                  staff: 245,
                  alerts: 2,
                  contact: "+1 (555) 0123"
                },
                {
                  name: "North Regional Center",
                  location: "North District",
                  status: "high_capacity",
                  capacity: 200,
                  occupied: 189,
                  staff: 124,
                  alerts: 5,
                  contact: "+1 (555) 0124"
                },
                {
                  name: "Emergency Treatment Center",
                  location: "City Center",
                  status: "critical",
                  capacity: 80,
                  occupied: 78,
                  staff: 45,
                  alerts: 8,
                  contact: "+1 (555) 0125"
                },
                {
                  name: "Outpatient Clinic",
                  location: "Suburban",
                  status: "good",
                  capacity: 120,
                  occupied: 67,
                  staff: 34,
                  alerts: 1,
                  contact: "+1 (555) 0126"
                }
              ].map((facility, idx) => (
                <div key={idx} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${
                        facility.status === 'optimal' ? 'bg-green-500' :
                        facility.status === 'good' ? 'bg-blue-500' :
                        facility.status === 'high_capacity' ? 'bg-orange-500' : 'bg-red-500'
                      }`}></div>
                      <div>
                        <span className="font-medium text-neutral-900">{facility.name}</span>
                        <p className="text-sm text-neutral-600 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {facility.location}
                        </p>
                      </div>
                    </div>
                    {facility.alerts > 0 && (
                      <Badge variant="destructive">{facility.alerts} alerts</Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-neutral-900">
                        {Math.round((facility.occupied/facility.capacity) * 100)}%
                      </p>
                      <p className="text-xs text-neutral-600">Capacity</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-neutral-900">{facility.occupied}</p>
                      <p className="text-xs text-neutral-600">Patients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-neutral-900">{facility.staff}</p>
                      <p className="text-xs text-neutral-600">Staff</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-neutral-600">
                      <Phone className="h-3 w-3" />
                      <span>{facility.contact}</span>
                    </div>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="outline">View</Button>
                      <Button size="sm">Manage</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resource Distribution */}
            <div className="space-y-4">
              <h4 className="font-medium text-neutral-800">Resource Distribution</h4>
              
              {/* Staff Distribution */}
              <div className="p-4 rounded-lg border">
                <h5 className="font-medium text-neutral-700 mb-3">Staff Distribution</h5>
                <div className="space-y-3">
                  {[
                    { role: "Nurses", total: 234, distribution: [98, 67, 34, 35] },
                    { role: "Doctors", total: 89, distribution: [34, 23, 12, 20] },
                    { role: "Technicians", total: 67, distribution: [23, 18, 8, 18] },
                    { role: "Support Staff", total: 145, distribution: [56, 34, 22, 33] }
                  ].map((staff, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-neutral-700">{staff.role}</span>
                        <span className="text-sm text-neutral-600">{staff.total} total</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {staff.distribution.map((count, facilityIdx) => (
                          <div key={facilityIdx} className="text-center p-2 bg-neutral-50 rounded text-xs">
                            {count}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Equipment Status */}
              <div className="p-4 rounded-lg border">
                <h5 className="font-medium text-neutral-700 mb-3">Critical Equipment Status</h5>
                <div className="space-y-3">
                  {[
                    { 
                      equipment: "MRI Machines", 
                      total: 8, 
                      operational: 7, 
                      maintenance: 1,
                      locations: ["Main: 3", "North: 2", "Emergency: 1", "Clinic: 2"]
                    },
                    { 
                      equipment: "CT Scanners", 
                      total: 12, 
                      operational: 11, 
                      maintenance: 1,
                      locations: ["Main: 4", "North: 3", "Emergency: 2", "Clinic: 3"]
                    },
                    { 
                      equipment: "Ventilators", 
                      total: 45, 
                      operational: 42, 
                      maintenance: 3,
                      locations: ["Main: 18", "North: 12", "Emergency: 10", "Clinic: 5"]
                    }
                  ].map((equip, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-neutral-700">{equip.equipment}</span>
                        <div className="flex space-x-2 text-xs">
                          <Badge variant="default">{equip.operational} active</Badge>
                          {equip.maintenance > 0 && (
                            <Badge variant="secondary">{equip.maintenance} maintenance</Badge>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-xs text-neutral-600">
                        {equip.locations.map((loc, locIdx) => (
                          <div key={locIdx} className="text-center p-1 bg-neutral-50 rounded">
                            {loc}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Integration */}
      <AIChat />
    </div>
  );
}