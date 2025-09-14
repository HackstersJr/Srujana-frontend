import { useState } from "react";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { AIChat } from "../components/AIChat";
import { 
  Clock,
  Stethoscope,
  Users,
  Bell,
  Settings,
  Search,
  Filter,
  Plus,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Calendar,
  Activity,
  UserCheck,
  Zap,
  Home,
  Heart,
  Pill,
  Package,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Shield,
  Truck,
  DollarSign,
  AlertCircle,
  CheckSquare,
  FileText,
  Target
} from "lucide-react";

export default function ChemistDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewContent />;
      case "inventory":
        return <InventoryManagement />;
      case "analytics":
        return <AnalyticsHub />;
      case "safety":
        return <DrugSafety />;
      case "supply":
        return <SupplyLogistics />;
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
              <div className="bg-emerald-600 p-2 rounded-xl">
                <Pill className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div>
                <h1 className="text-base md:text-lg font-medium">Pharmacy Dashboard</h1>
                <p className="text-sm text-neutral-600">St. Mary's Central Pharmacy</p>
              </div>
            </div>
            
            {/* Search and Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
              {/* Search Bar */}
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <Input
                  placeholder="Search medicines or batches..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              
              {/* Filter Controls */}
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full sm:w-32">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="antibiotics">Antibiotics</SelectItem>
                  <SelectItem value="painkillers">Painkillers</SelectItem>
                  <SelectItem value="cardiac">Cardiac</SelectItem>
                  <SelectItem value="diabetes">Diabetes</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Notification Bell */}
              <Button variant="ghost" size="icon" className="relative h-8 w-8 md:h-10 md:w-10">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-3 w-3 md:h-4 md:w-4 p-0 text-xs bg-orange-500 text-white">
                  7
                </Badge>
              </Button>
              
              <div className="flex items-center space-x-3">
                <Avatar className="h-7 w-7 md:h-8 md:w-8">
                  <AvatarFallback className="bg-emerald-100 text-emerald-900 text-xs md:text-sm">CP</AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">Dr. Chris Patel</p>
                  <p className="text-xs text-neutral-600">Chief Pharmacist</p>
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
      <nav className="border-b bg-white sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 overflow-x-auto">
              <div className="flex items-center space-x-1">
                <Button
                  variant={activeTab === "overview" ? "default" : "ghost"}
                  onClick={() => setActiveTab("overview")}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <Home className="h-4 w-4" />
                  <span>Overview</span>
                </Button>
                <Button
                  variant={activeTab === "inventory" ? "default" : "ghost"}
                  onClick={() => setActiveTab("inventory")}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <Package className="h-4 w-4" />
                  <span>Inventory</span>
                </Button>
                <Button
                  variant={activeTab === "analytics" ? "default" : "ghost"}
                  onClick={() => setActiveTab("analytics")}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Analytics</span>
                </Button>
                <Button
                  variant={activeTab === "safety" ? "default" : "ghost"}
                  onClick={() => setActiveTab("safety")}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <Shield className="h-4 w-4" />
                  <span className="hidden sm:inline">Drug Safety</span>
                  <span className="sm:hidden">Safety</span>
                </Button>
                <Button
                  variant={activeTab === "supply" ? "default" : "ghost"}
                  onClick={() => setActiveTab("supply")}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <Truck className="h-4 w-4" />
                  <span className="hidden sm:inline">Supply Chain</span>
                  <span className="sm:hidden">Supply</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 md:p-8 border border-emerald-200">
            <div className="flex flex-col lg:flex-row items-start justify-between space-y-4 lg:space-y-0">
              <div className="space-y-4 flex-1">
                <div>
                  <h2 className="text-xl md:text-2xl font-medium mb-1 text-emerald-900">Good Afternoon, Dr. Patel</h2>
                  <p className="text-emerald-700 text-sm md:text-base">Managing 2,847 medications across 15 departments with 94% inventory efficiency</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                  <div className="flex items-center space-x-2 text-emerald-700">
                    <AlertTriangle className="h-4 w-4" />
                    <span>12 low stock alerts</span>
                  </div>
                  <div className="flex items-center space-x-2 text-emerald-700">
                    <Package className="h-4 w-4" />
                    <span>3 shipments arriving today</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block text-right">
                <p className="text-2xl md:text-3xl font-light text-emerald-900">14</p>
                <p className="text-sm text-emerald-700">September</p>
                <p className="text-xs text-emerald-600">Saturday</p>
              </div>
            </div>
          </div>

          {/* Tab Content */}
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
      {/* Quick Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <Button className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700">
          <Plus className="h-4 w-4" />
          <span>Add New Stock</span>
        </Button>
        <Button variant="outline" className="flex items-center space-x-2">
          <FileText className="h-4 w-4" />
          <span>Generate Report</span>
        </Button>
        <Button variant="outline" className="flex items-center space-x-2">
          <Shield className="h-4 w-4" />
          <span>Safety Check</span>
        </Button>
        <Button variant="outline" className="flex items-center space-x-2">
          <Truck className="h-4 w-4" />
          <span>Order Supplies</span>
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <Badge className="bg-green-100 text-green-800">+5.2%</Badge>
          </div>
          <h3 className="text-lg font-medium mb-1">Total Inventory</h3>
          <p className="text-2xl font-bold text-blue-600">2,847</p>
          <p className="text-sm text-neutral-500">Active medications</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <Badge className="bg-green-100 text-green-800">+12.3%</Badge>
          </div>
          <h3 className="text-lg font-medium mb-1">Monthly Revenue</h3>
          <p className="text-2xl font-bold text-green-600">$284K</p>
          <p className="text-sm text-neutral-500">Dispensed medications</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
            </div>
            <Badge className="bg-red-100 text-red-800">Critical</Badge>
          </div>
          <h3 className="text-lg font-medium mb-1">Low Stock Items</h3>
          <p className="text-2xl font-bold text-orange-600">12</p>
          <p className="text-sm text-neutral-500">Require immediate attention</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <Badge className="bg-green-100 text-green-800">Excellent</Badge>
          </div>
          <h3 className="text-lg font-medium mb-1">Efficiency Rate</h3>
          <p className="text-2xl font-bold text-purple-600">94%</p>
          <p className="text-sm text-neutral-500">Inventory turnover</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 border">
        <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <div className="flex-1">
              <p className="font-medium">New shipment received</p>
              <p className="text-sm text-neutral-600">500 units of Amoxicillin 500mg from MedSupply Co.</p>
            </div>
            <span className="text-xs text-neutral-500">10 min ago</span>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <div className="flex-1">
              <p className="font-medium">Low stock alert</p>
              <p className="text-sm text-neutral-600">Insulin glargine below minimum threshold (15 units remaining)</p>
            </div>
            <span className="text-xs text-neutral-500">25 min ago</span>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <Package className="h-5 w-5 text-blue-600" />
            <div className="flex-1">
              <p className="font-medium">Bulk dispensed</p>
              <p className="text-sm text-neutral-600">ICU requested 200 units of Morphine 10mg</p>
            </div>
            <span className="text-xs text-neutral-500">1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inventory Management Component
function InventoryManagement() {
  return (
    <div className="space-y-6">
      {/* Medicine Inflow & Outflow */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border">
          <h3 className="text-lg font-medium mb-4">Daily Inflow vs Outflow</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800">Inflow</p>
                  <p className="text-sm text-green-600">Received today</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-green-600">1,245</p>
                <p className="text-sm text-green-500">units</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <TrendingDown className="h-5 w-5 text-red-600" />
                <div>
                  <p className="font-medium text-red-800">Outflow</p>
                  <p className="text-sm text-red-600">Dispensed today</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-red-600">892</p>
                <p className="text-sm text-red-500">units</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-neutral-600 mb-2">
              <span>Net Change</span>
              <span className="text-green-600 font-medium">+353 units</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>

        {/* Predictive Demand Forecasting */}
        <div className="bg-white rounded-2xl p-6 border">
          <h3 className="text-lg font-medium mb-4">Demand Forecast (Next 7 Days)</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
              <span className="text-sm font-medium">Antibiotics</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-red-600">High Demand</span>
                <div className="w-16 h-2 bg-red-200 rounded-full">
                  <div className="w-3/4 h-2 bg-red-600 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
              <span className="text-sm font-medium">Pain Management</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-yellow-600">Medium Demand</span>
                <div className="w-16 h-2 bg-yellow-200 rounded-full">
                  <div className="w-1/2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
              <span className="text-sm font-medium">Cardiac Medications</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-600">Low Demand</span>
                <div className="w-16 h-2 bg-green-200 rounded-full">
                  <div className="w-1/4 h-2 bg-green-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 font-medium">AI Recommendation</p>
            <p className="text-xs text-blue-600">Order 500 units of Amoxicillin and 200 units of Ibuprofen by Monday</p>
          </div>
        </div>
      </div>

      {/* Current Stock Status */}
      <div className="bg-white rounded-2xl p-6 border">
        <h3 className="text-lg font-medium mb-4">Stock Status by Category</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Category</th>
                <th className="text-left p-3">Total Items</th>
                <th className="text-left p-3">In Stock</th>
                <th className="text-left p-3">Low Stock</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Antibiotics</td>
                <td className="p-3">245</td>
                <td className="p-3">238</td>
                <td className="p-3 text-red-600">7</td>
                <td className="p-3">
                  <Badge className="bg-yellow-100 text-yellow-800">Attention Needed</Badge>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Pain Management</td>
                <td className="p-3">156</td>
                <td className="p-3">154</td>
                <td className="p-3 text-red-600">2</td>
                <td className="p-3">
                  <Badge className="bg-green-100 text-green-800">Good</Badge>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Diabetes Care</td>
                <td className="p-3">89</td>
                <td className="p-3">86</td>
                <td className="p-3 text-red-600">3</td>
                <td className="p-3">
                  <Badge className="bg-green-100 text-green-800">Good</Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Analytics Hub Component
function AnalyticsHub() {
  return (
    <div className="space-y-6">
      {/* Customizable Analytics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border">
          <h3 className="text-lg font-medium mb-4">Cost Analysis Trends</h3>
          <div className="h-64">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <linearGradient id="costGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#059669" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#059669" stopOpacity="0"/>
                </linearGradient>
              </defs>
              {/* Cost trend line */}
              <polyline
                fill="none"
                stroke="#059669"
                strokeWidth="3"
                points="0,200 80,180 160,165 240,170 320,155 400,145 480,140"
              />
              <polygon
                fill="url(#costGradient)"
                points="0,200 80,180 160,165 240,170 320,155 400,145 480,140 480,256 0,256"
              />
              <text x="0" y="240" className="text-xs fill-neutral-500">Jan</text>
              <text x="160" y="240" className="text-xs fill-neutral-500">Apr</text>
              <text x="320" y="240" className="text-xs fill-neutral-500">Jul</text>
              <text x="450" y="240" className="text-xs fill-neutral-500">Sep</text>
            </svg>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-sm text-neutral-500">Average Monthly Cost</p>
              <p className="text-xl font-bold text-emerald-600">$47,250</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Cost Reduction</p>
              <p className="text-xl font-bold text-green-600">-8.5%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border">
          <h3 className="text-lg font-medium mb-4">Wastage Analysis</h3>
          <div className="space-y-4">
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Expired Items</span>
                <span className="text-sm text-red-600">2.3%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Damaged Stock</span>
                <span className="text-sm text-orange-600">1.1%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '11%' }}></div>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Returns</span>
                <span className="text-sm text-yellow-600">0.8%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '8%' }}></div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm font-medium text-green-800">Total Wastage: 4.2%</p>
            <p className="text-xs text-green-600">Below industry average of 6.1%</p>
          </div>
        </div>
      </div>

      {/* Outcome-Based Effectiveness Analysis */}
      <div className="bg-white rounded-2xl p-6 border">
        <h3 className="text-lg font-medium mb-4">Medication Effectiveness by Patient Group</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-blue-800">Pediatric</h4>
              <Badge className="bg-blue-100 text-blue-800">Ages 0-17</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Antibiotics</span>
                <span className="text-sm font-medium text-green-600">92%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Pain Relief</span>
                <span className="text-sm font-medium text-green-600">88%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Respiratory</span>
                <span className="text-sm font-medium text-yellow-600">76%</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-green-800">Adult</h4>
              <Badge className="bg-green-100 text-green-800">Ages 18-64</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Hypertension</span>
                <span className="text-sm font-medium text-green-600">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Diabetes</span>
                <span className="text-sm font-medium text-green-600">91%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Pain Management</span>
                <span className="text-sm font-medium text-green-600">89%</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-purple-800">Elderly</h4>
              <Badge className="bg-purple-100 text-purple-800">Ages 65+</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Cardiac</span>
                <span className="text-sm font-medium text-green-600">96%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Arthritis</span>
                <span className="text-sm font-medium text-yellow-600">82%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Cognitive</span>
                <span className="text-sm font-medium text-yellow-600">78%</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-orange-800">Critical Care</h4>
              <Badge className="bg-orange-100 text-orange-800">ICU/ER</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Life Support</span>
                <span className="text-sm font-medium text-green-600">98%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Sedation</span>
                <span className="text-sm font-medium text-green-600">95%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Emergency</span>
                <span className="text-sm font-medium text-green-600">93%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Drug Safety Component
function DrugSafety() {
  return (
    <div className="space-y-6">
      {/* Drug Interaction Checks */}
      <div className="bg-white rounded-2xl p-6 border">
        <h3 className="text-lg font-medium mb-4">Recent Drug Interaction Alerts</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-red-800">Critical Interaction Detected</p>
              <p className="text-sm text-red-700 mb-2">Warfarin + Aspirin - Patient ID: 45231</p>
              <p className="text-xs text-red-600">Increased bleeding risk. Alternative: Acetaminophen recommended.</p>
              <div className="flex space-x-2 mt-3">
                <Button size="sm" className="bg-red-600 hover:bg-red-700">Override with Reason</Button>
                <Button size="sm" variant="outline">Suggest Alternative</Button>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-yellow-800">Moderate Interaction</p>
              <p className="text-sm text-yellow-700 mb-2">Metformin + Lisinopril - Patient ID: 78901</p>
              <p className="text-xs text-yellow-600">Monitor kidney function. Dosage adjustment may be needed.</p>
              <div className="flex space-x-2 mt-3">
                <Button size="sm" variant="outline">Schedule Monitoring</Button>
                <Button size="sm" variant="outline">Contact Physician</Button>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-blue-800">Safe Combination Verified</p>
              <p className="text-sm text-blue-700 mb-2">Amlodipine + Atorvastatin - Patient ID: 23456</p>
              <p className="text-xs text-blue-600">No contraindications found. Safe to dispense.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contraindication Checks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border">
          <h3 className="text-lg font-medium mb-4">Allergy & Contraindication Database</h3>
          <div className="space-y-3">
            <div className="p-3 bg-neutral-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Patient Allergies Tracked</span>
                <Badge className="bg-blue-100 text-blue-800">1,247 patients</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>Penicillin: 234 patients</div>
                <div>Sulfa: 156 patients</div>
                <div>NSAID: 89 patients</div>
                <div>Latex: 67 patients</div>
              </div>
            </div>
            
            <div className="p-3 bg-neutral-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Age-Related Contraindications</span>
                <Badge className="bg-orange-100 text-orange-800">45 active alerts</Badge>
              </div>
              <div className="text-sm space-y-1">
                <p>• Aspirin contraindicated for children under 18</p>
                <p>• Certain antibiotics require pediatric dosing</p>
                <p>• Elderly patients: reduced kidney function considerations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border">
          <h3 className="text-lg font-medium mb-4">Safety Compliance Score</h3>
          <div className="text-center mb-6">
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#059669"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${(97 / 100) * 251.2} 251.2`}
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">97%</span>
              </div>
            </div>
            <p className="text-sm text-neutral-600 mt-2">Excellent safety compliance</p>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Interaction checks performed</span>
              <span className="font-medium text-green-600">100%</span>
            </div>
            <div className="flex justify-between">
              <span>Allergy alerts reviewed</span>
              <span className="font-medium text-green-600">98%</span>
            </div>
            <div className="flex justify-between">
              <span>Contraindication flags</span>
              <span className="font-medium text-yellow-600">94%</span>
            </div>
            <div className="flex justify-between">
              <span>Documentation complete</span>
              <span className="font-medium text-green-600">99%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Supply & Logistics Component
function SupplyLogistics() {
  return (
    <div className="space-y-6">
      {/* Supplier Performance */}
      <div className="bg-white rounded-2xl p-6 border">
        <h3 className="text-lg font-medium mb-4">Supplier Performance & Optimization</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Supplier</th>
                <th className="text-left p-3">Reliability</th>
                <th className="text-left p-3">Cost Rating</th>
                <th className="text-left p-3">Quality Score</th>
                <th className="text-left p-3">Delivery Time</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">
                  <div>
                    <p className="font-medium">MedSupply Co.</p>
                    <p className="text-xs text-neutral-500">Primary supplier</p>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-green-200 rounded-full">
                      <div className="w-full h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-sm">98%</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">A+</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-green-200 rounded-full">
                      <div className="w-11/12 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-sm">94%</span>
                  </div>
                </td>
                <td className="p-3">
                  <span className="text-sm">1.2 days</span>
                </td>
                <td className="p-3">
                  <Badge className="bg-green-100 text-green-800">Preferred</Badge>
                </td>
              </tr>
              
              <tr className="border-b">
                <td className="p-3">
                  <div>
                    <p className="font-medium">PharmaDirect</p>
                    <p className="text-xs text-neutral-500">Secondary supplier</p>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-yellow-200 rounded-full">
                      <div className="w-4/5 h-2 bg-yellow-600 rounded-full"></div>
                    </div>
                    <span className="text-sm">87%</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm font-medium">B+</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-yellow-200 rounded-full">
                      <div className="w-4/5 h-2 bg-yellow-600 rounded-full"></div>
                    </div>
                    <span className="text-sm">89%</span>
                  </div>
                </td>
                <td className="p-3">
                  <span className="text-sm">2.1 days</span>
                </td>
                <td className="p-3">
                  <Badge className="bg-yellow-100 text-yellow-800">Backup</Badge>
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3">
                  <div>
                    <p className="font-medium">HealthCorp Ltd.</p>
                    <p className="text-xs text-neutral-500">Specialty drugs</p>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-green-200 rounded-full">
                      <div className="w-11/12 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-sm">96%</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium">C</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-green-200 rounded-full">
                      <div className="w-full h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-sm">99%</span>
                  </div>
                </td>
                <td className="p-3">
                  <span className="text-sm">3.5 days</span>
                </td>
                <td className="p-3">
                  <Badge className="bg-blue-100 text-blue-800">Specialty</Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Logistics Optimization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border">
          <h3 className="text-lg font-medium mb-4">Delivery Schedule Optimization</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-blue-800">Incoming Shipments</h4>
                <Badge className="bg-blue-100 text-blue-800">3 Today</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>MedSupply Co. - Antibiotics</span>
                  <span className="text-blue-600">10:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>PharmaDirect - Pain Management</span>
                  <span className="text-blue-600">2:15 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>HealthCorp - Cardiac Medications</span>
                  <span className="text-blue-600">4:45 PM</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-800 mb-2">Optimized Routes</h4>
              <div className="text-sm text-green-700">
                <p>• Consolidated 3 separate deliveries into 2 trips</p>
                <p>• Reduced transportation costs by 23%</p>
                <p>• Improved delivery time efficiency by 31%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border">
          <h3 className="text-lg font-medium mb-4">Alternative Suppliers & Cost Savings</h3>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-medium text-yellow-800 mb-3">Cost Saving Opportunities</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Amoxicillin 500mg</p>
                    <p className="text-xs text-yellow-600">Alternative supplier available</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600">-15%</p>
                    <p className="text-xs text-neutral-500">Save $1,240/month</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Ibuprofen 200mg</p>
                    <p className="text-xs text-yellow-600">Bulk discount available</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600">-22%</p>
                    <p className="text-xs text-neutral-500">Save $890/month</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-4" size="sm">
                Review Alternatives
              </Button>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h4 className="font-medium mb-2">Monthly Savings Summary</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-neutral-500">Potential Savings</p>
                  <p className="font-bold text-green-600">$4,780</p>
                </div>
                <div>
                  <p className="text-neutral-500">Realized Savings</p>
                  <p className="font-bold text-green-600">$3,240</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Stock Management */}
      <div className="bg-white rounded-2xl p-6 border">
        <h3 className="text-lg font-medium mb-4">Emergency Stock & Contingency Planning</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h4 className="font-medium text-red-800 mb-2">Critical Stock Levels</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Insulin (ICU)</span>
                <span className="text-red-600 font-medium">2 days left</span>
              </div>
              <div className="flex justify-between">
                <span>Epinephrine</span>
                <span className="text-red-600 font-medium">1 day left</span>
              </div>
              <div className="flex justify-between">
                <span>Morphine 10mg</span>
                <span className="text-orange-600 font-medium">3 days left</span>
              </div>
            </div>
            <Button size="sm" className="w-full mt-3 bg-red-600 hover:bg-red-700">
              Emergency Order
            </Button>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Backup Suppliers</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Emergency supplier</span>
                <Badge className="bg-green-100 text-green-800">Available</Badge>
              </div>
              <div className="flex justify-between">
                <span>Rush delivery</span>
                <Badge className="bg-blue-100 text-blue-800">4-6 hours</Badge>
              </div>
              <div className="flex justify-between">
                <span>Cost premium</span>
                <span className="text-blue-600 font-medium">+25%</span>
              </div>
            </div>
            <Button size="sm" variant="outline" className="w-full mt-3">
              Contact Backup
            </Button>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">Safety Buffer Status</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Emergency reserve</span>
                <span className="text-green-600 font-medium">78% full</span>
              </div>
              <div className="flex justify-between">
                <span>Last replenished</span>
                <span className="text-neutral-600">3 days ago</span>
              </div>
              <div className="flex justify-between">
                <span>Next review</span>
                <span className="text-neutral-600">Monday</span>
              </div>
            </div>
            <Button size="sm" variant="outline" className="w-full mt-3">
              Review Buffer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}