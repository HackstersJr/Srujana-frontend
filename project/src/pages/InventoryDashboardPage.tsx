import { useState } from "react";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { AIChat } from "../components/AIChat";
import { 
  Package,
  Warehouse,
  Bell,
  Search,
  Filter,
  Plus,
  AlertTriangle,
  Activity,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Truck,
  Building,
  Bed,
  MonitorSpeaker,
  Zap,
  ArrowUpDown,
  RefreshCw,
  MapPin,
  ShieldCheck,
  AlertCircle,
  DollarSign,
  Target,
  Globe,
  Radio,
  Wrench,
  Clock,
  Settings
} from "lucide-react";

export default function InventoryDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("all");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewContent />;
      case "stock":
        return <StockManagement />;
      case "supply":
        return <SupplyChainHub />;
      case "equipment":
        return <EquipmentManagement />;
      case "analytics":
        return <InventoryAnalytics />;
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
              <div className="bg-blue-600 p-2 rounded-xl">
                <Warehouse className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div>
                <h1 className="text-base md:text-lg font-medium">Inventory Management</h1>
                <p className="text-sm text-neutral-600">Multi-Facility Stock Control</p>
              </div>
            </div>
            
            {/* Search and Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
              {/* Search Bar */}
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <Input
                  placeholder="Search inventory items..."
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
                  <SelectItem value="icu">ICU</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="surgery">Surgery</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="pharmacy">Pharmacy</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Notification */}
              <Button size="icon" variant="outline" className="relative h-8 w-8 md:h-10 md:w-10">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-3 w-3 md:h-4 md:w-4 p-0 text-xs bg-red-500 text-white">
                  12
                </Badge>
              </Button>
              
              {/* Profile */}
              <div className="flex items-center space-x-3">
                <Avatar className="h-7 w-7 md:h-8 md:w-8">
                  <AvatarFallback className="bg-blue-100 text-blue-900 text-xs md:text-sm">IM</AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">Inventory Manager</p>
                  <p className="text-xs text-neutral-600">Operations</p>
                </div>
              </div>
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
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "stock", label: "Stock", icon: Package },
              { id: "supply", label: "Supply", icon: Truck },
              { id: "equipment", label: "Equipment", icon: Bed },
              { id: "analytics", label: "Analytics", icon: PieChart }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-3 md:py-4 border-b-2 whitespace-nowrap px-2 md:px-0 ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
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
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Total Stock Value</p>
              <p className="text-2xl font-bold text-neutral-900">$2.4M</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% vs last month
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Critical Items</p>
              <p className="text-2xl font-bold text-neutral-900">23</p>
              <p className="text-xs text-red-600 flex items-center mt-1">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Require immediate attention
              </p>
            </div>
            <div className="bg-red-100 p-3 rounded-xl">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Active Facilities</p>
              <p className="text-2xl font-bold text-neutral-900">8</p>
              <p className="text-xs text-blue-600 flex items-center mt-1">
                <Building className="h-3 w-3 mr-1" />
                All systems operational
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-xl">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Pending Orders</p>
              <p className="text-2xl font-bold text-neutral-900">145</p>
              <p className="text-xs text-orange-600 flex items-center mt-1">
                <Clock className="h-3 w-3 mr-1" />
                $340K in transit
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl">
              <Truck className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Monitoring Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Multi-Department Stock Status */}
        <div className="bg-white rounded-xl border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-neutral-900">Department Stock Status</h3>
              <Button size="sm" variant="outline">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Balance Stock
              </Button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {[
              { dept: "ICU", status: "critical", stock: 23, capacity: 100, color: "red" },
              { dept: "Emergency", status: "low", stock: 45, capacity: 100, color: "orange" },
              { dept: "Surgery", status: "good", stock: 78, capacity: 100, color: "green" },
              { dept: "Pediatrics", status: "optimal", stock: 92, capacity: 100, color: "blue" },
              { dept: "Cardiology", status: "good", stock: 67, capacity: 100, color: "green" },
            ].map((dept, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full bg-${dept.color}-500`}></div>
                  <div>
                    <p className="font-medium text-neutral-900">{dept.dept}</p>
                    <p className="text-sm text-neutral-600 capitalize">{dept.status}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-neutral-100 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-${dept.color}-500`}
                      style={{ width: `${dept.stock}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-neutral-700">{dept.stock}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Chain Coordination */}
        <div className="bg-white rounded-xl border">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-neutral-900">Supply Chain Status</h3>
          </div>
          <div className="p-6 space-y-4">
            {[
              { 
                supplier: "MedSupply Pro", 
                status: "active", 
                delivery: "Today 2:30 PM", 
                items: 24,
                priority: "high"
              },
              { 
                supplier: "PharmaCorp", 
                status: "delayed", 
                delivery: "Tomorrow 9:00 AM", 
                items: 15,
                priority: "medium"
              },
              { 
                supplier: "Global Medical", 
                status: "emergency", 
                delivery: "ASAP", 
                items: 8,
                priority: "critical"
              },
              { 
                supplier: "HealthTech Solutions", 
                status: "scheduled", 
                delivery: "Dec 16, 10:00 AM", 
                items: 32,
                priority: "low"
              },
            ].map((supply, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    supply.status === 'active' ? 'bg-green-500' :
                    supply.status === 'delayed' ? 'bg-orange-500' :
                    supply.status === 'emergency' ? 'bg-red-500' : 'bg-blue-500'
                  }`}></div>
                  <div>
                    <p className="font-medium text-neutral-900">{supply.supplier}</p>
                    <p className="text-sm text-neutral-600">{supply.delivery}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={supply.priority === 'critical' ? 'destructive' : 
                    supply.priority === 'high' ? 'default' : 'secondary'}>
                    {supply.items} items
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Reallocation Panel */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <Zap className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Emergency Reallocation</h3>
                <p className="text-sm text-neutral-600">Critical shortage detected in ICU</p>
              </div>
            </div>
            <Button className="bg-red-600 hover:bg-red-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              Execute Reallocation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-neutral-600 mb-1">Source: Surgery Ward</p>
              <p className="font-semibold">Available: 45 units</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-neutral-600 mb-1">Destination: ICU</p>
              <p className="font-semibold text-red-600">Critical Need: 20 units</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-neutral-600 mb-1">Transfer Time</p>
              <p className="font-semibold text-green-600">~15 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stock Management Component
function StockManagement() {
  return (
    <div className="space-y-6">
      {/* Stock Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-neutral-900">Medical Supplies</h3>
            <Package className="h-5 w-5 text-blue-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Total Items</span>
              <span className="font-semibold">2,847</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Low Stock</span>
              <span className="font-semibold text-orange-600">23</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Out of Stock</span>
              <span className="font-semibold text-red-600">5</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-neutral-900">Pharmaceuticals</h3>
            <Package className="h-5 w-5 text-green-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Total Items</span>
              <span className="font-semibold">1,654</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Expiring Soon</span>
              <span className="font-semibold text-orange-600">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Critical Stock</span>
              <span className="font-semibold text-red-600">8</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-neutral-900">Consumables</h3>
            <Package className="h-5 w-5 text-purple-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Total Items</span>
              <span className="font-semibold">987</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">High Usage</span>
              <span className="font-semibold text-blue-600">45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Need Reorder</span>
              <span className="font-semibold text-orange-600">18</span>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Department Stock Balancing */}
      <div className="bg-white rounded-xl border">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-neutral-900">Multi-Department Stock Balancing</h3>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                <MapPin className="h-4 w-4 mr-2" />
                View Map
              </Button>
              <Button size="sm">
                <Target className="h-4 w-4 mr-2" />
                Auto Balance
              </Button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Stock Distribution Chart */}
            <div className="space-y-4">
              <h4 className="font-medium text-neutral-800">Current Distribution</h4>
              {[
                { ward: "ICU", current: 45, optimal: 70, status: "deficit" },
                { ward: "Emergency", current: 89, optimal: 75, status: "surplus" },
                { ward: "Surgery", current: 68, optimal: 65, status: "optimal" },
                { ward: "Pediatrics", current: 34, optimal: 50, status: "deficit" },
                { ward: "Cardiology", current: 72, optimal: 60, status: "surplus" }
              ].map((ward, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-700">{ward.ward}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      ward.status === 'deficit' ? 'bg-red-100 text-red-700' :
                      ward.status === 'surplus' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {ward.status}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1 bg-neutral-100 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          ward.status === 'deficit' ? 'bg-red-500' :
                          ward.status === 'surplus' ? 'bg-blue-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${(ward.current / 100) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-neutral-600 w-12">{ward.current}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommended Actions */}
            <div className="space-y-4">
              <h4 className="font-medium text-neutral-800">Recommended Actions</h4>
              <div className="space-y-3">
                {[
                  { 
                    action: "Transfer 25 units", 
                    from: "Emergency", 
                    to: "ICU", 
                    priority: "high",
                    time: "15 min"
                  },
                  { 
                    action: "Transfer 16 units", 
                    from: "Cardiology", 
                    to: "Pediatrics", 
                    priority: "medium",
                    time: "8 min"
                  },
                  { 
                    action: "Reorder critical items", 
                    from: "Supplier", 
                    to: "ICU", 
                    priority: "critical",
                    time: "2 hours"
                  }
                ].map((action, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        action.priority === 'critical' ? 'bg-red-500' :
                        action.priority === 'high' ? 'bg-orange-500' : 'bg-blue-500'
                      }`}></div>
                      <div>
                        <p className="font-medium text-neutral-900">{action.action}</p>
                        <p className="text-sm text-neutral-600">{action.from} → {action.to}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-neutral-700">{action.time}</p>
                      <Button size="sm" variant="outline">Execute</Button>
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

// Supply Chain Hub Component  
function SupplyChainHub() {
  return (
    <div className="space-y-6">
      {/* Supply Chain Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Active Suppliers</p>
              <p className="text-2xl font-bold text-neutral-900">24</p>
            </div>
            <Truck className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Pending Orders</p>
              <p className="text-2xl font-bold text-neutral-900">145</p>
            </div>
            <Clock className="h-6 w-6 text-orange-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">In Transit</p>
              <p className="text-2xl font-bold text-neutral-900">$340K</p>
            </div>
            <Radio className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Emergency Orders</p>
              <p className="text-2xl font-bold text-neutral-900">8</p>
            </div>
            <Zap className="h-6 w-6 text-red-600" />
          </div>
        </div>
      </div>

      {/* Automated Supplier Communication */}
      <div className="bg-white rounded-xl border">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-neutral-900">Automated Supplier Communication</h3>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Auto-Order
            </Button>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active Communications */}
            <div className="space-y-4">
              <h4 className="font-medium text-neutral-800">Active Communications</h4>
              {[
                { 
                  supplier: "MedSupply Pro",
                  status: "auto-ordered",
                  message: "Low stock alert: Surgical masks",
                  response: "Order confirmed - Delivery in 2 hours",
                  timestamp: "2 mins ago",
                  priority: "high"
                },
                { 
                  supplier: "PharmaCorp",
                  status: "negotiating",
                  message: "Bulk discount request: Antibiotics",
                  response: "15% discount approved for 500+ units",
                  timestamp: "15 mins ago",
                  priority: "medium"
                },
                { 
                  supplier: "Global Medical",
                  status: "emergency",
                  message: "Critical shortage: Oxygen tanks",
                  response: "Emergency delivery dispatched",
                  timestamp: "5 mins ago",
                  priority: "critical"
                }
              ].map((comm, idx) => (
                <div key={idx} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        comm.priority === 'critical' ? 'bg-red-500' :
                        comm.priority === 'high' ? 'bg-orange-500' : 'bg-blue-500'
                      }`}></div>
                      <span className="font-medium text-neutral-900">{comm.supplier}</span>
                    </div>
                    <Badge variant="outline">{comm.status}</Badge>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-neutral-600">→ {comm.message}</p>
                    <p className="text-green-700">← {comm.response}</p>
                    <p className="text-xs text-neutral-500">{comm.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Communication Rules */}
            <div className="space-y-4">
              <h4 className="font-medium text-neutral-800">Auto-Communication Rules</h4>
              <div className="space-y-3">
                {[
                  { 
                    trigger: "Stock < 20%",
                    action: "Auto-order standard quantity",
                    suppliers: ["MedSupply Pro", "HealthTech"],
                    active: true
                  },
                  { 
                    trigger: "Critical shortage",
                    action: "Emergency order + expedite",
                    suppliers: ["Global Medical"],
                    active: true
                  },
                  { 
                    trigger: "Bulk opportunity",
                    action: "Negotiate bulk discount",
                    suppliers: ["PharmaCorp"],
                    active: true
                  },
                  { 
                    trigger: "Price increase > 10%",
                    action: "Request alternate suppliers",
                    suppliers: ["All"],
                    active: false
                  }
                ].map((rule, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${rule.active ? 'bg-green-500' : 'bg-neutral-300'}`}></div>
                      <div>
                        <p className="font-medium text-neutral-900">{rule.trigger}</p>
                        <p className="text-sm text-neutral-600">{rule.action}</p>
                      </div>
                    </div>
                    <Button size="sm" variant={rule.active ? "default" : "outline"}>
                      {rule.active ? "Active" : "Enable"}
                    </Button>
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

// Equipment & Bed Management Component
function EquipmentManagement() {
  return (
    <div className="space-y-6">
      {/* Equipment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-neutral-900">Medical Equipment</h3>
            <MonitorSpeaker className="h-5 w-5 text-blue-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Total Units</span>
              <span className="font-semibold">847</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">In Use</span>
              <span className="font-semibold text-green-600">623</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Maintenance</span>
              <span className="font-semibold text-orange-600">24</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-neutral-900">Hospital Beds</h3>
            <Bed className="h-5 w-5 text-green-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Total Beds</span>
              <span className="font-semibold">450</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Occupied</span>
              <span className="font-semibold text-red-600">387</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Available</span>
              <span className="font-semibold text-green-600">63</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-neutral-900">Critical Systems</h3>
            <Wrench className="h-5 w-5 text-purple-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Operational</span>
              <span className="font-semibold text-green-600">98%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Scheduled Maintenance</span>
              <span className="font-semibold text-blue-600">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-neutral-600">Critical Alerts</span>
              <span className="font-semibold text-red-600">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Allocation Dashboard */}
      <div className="bg-white rounded-xl border">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-neutral-900">Dynamic Allocation Based on Patient Flow</h3>
            <Button size="sm">
              <Activity className="h-4 w-4 mr-2" />
              Real-time View
            </Button>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bed Allocation by Department */}
            <div className="space-y-4">
              <h4 className="font-medium text-neutral-800">Bed Allocation by Department</h4>
              {[
                { 
                  dept: "ICU", 
                  total: 45, 
                  occupied: 42, 
                  incoming: 3,
                  predicted: "High demand next 4hrs",
                  status: "critical"
                },
                { 
                  dept: "Emergency", 
                  total: 80, 
                  occupied: 67, 
                  incoming: 8,
                  predicted: "Moderate inflow",
                  status: "moderate"
                },
                { 
                  dept: "Surgery", 
                  total: 120, 
                  occupied: 89, 
                  incoming: 5,
                  predicted: "Stable demand",
                  status: "good"
                },
                { 
                  dept: "Pediatrics", 
                  total: 60, 
                  occupied: 34, 
                  incoming: 2,
                  predicted: "Low demand",
                  status: "good"
                }
              ].map((dept, idx) => (
                <div key={idx} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        dept.status === 'critical' ? 'bg-red-500' :
                        dept.status === 'moderate' ? 'bg-orange-500' : 'bg-green-500'
                      }`}></div>
                      <span className="font-medium text-neutral-900">{dept.dept}</span>
                    </div>
                    <Badge variant="outline">
                      {dept.occupied}/{dept.total} beds
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Occupancy Rate</span>
                      <span className="font-medium">{Math.round((dept.occupied/dept.total) * 100)}%</span>
                    </div>
                    <div className="w-full bg-neutral-100 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          dept.status === 'critical' ? 'bg-red-500' :
                          dept.status === 'moderate' ? 'bg-orange' : 'bg-green-500'
                        }`}
                        style={{ width: `${(dept.occupied/dept.total) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-neutral-500">
                      <span>Incoming: +{dept.incoming}</span>
                      <span>{dept.predicted}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Equipment Utilization */}
            <div className="space-y-4">
              <h4 className="font-medium text-neutral-800">Critical Equipment Status</h4>
              {[
                { 
                  equipment: "Ventilators", 
                  total: 45, 
                  inUse: 38, 
                  location: "ICU", 
                  nextMaintenance: "Dec 20",
                  priority: "high"
                },
                { 
                  equipment: "MRI Machines", 
                  total: 3, 
                  inUse: 2, 
                  location: "Radiology", 
                  nextMaintenance: "Dec 18",
                  priority: "medium"
                },
                { 
                  equipment: "Dialysis Units", 
                  total: 12, 
                  inUse: 8, 
                  location: "Nephrology", 
                  nextMaintenance: "Dec 22",
                  priority: "low"
                },
                { 
                  equipment: "X-Ray Machines", 
                  total: 8, 
                  inUse: 6, 
                  location: "Multiple", 
                  nextMaintenance: "Dec 16",
                  priority: "high"
                }
              ].map((equip, idx) => (
                <div key={idx} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <MonitorSpeaker className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-neutral-900">{equip.equipment}</span>
                    </div>
                    <Badge variant={equip.priority === 'high' ? 'destructive' : 
                      equip.priority === 'medium' ? 'default' : 'secondary'}>
                      {equip.priority}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Utilization</span>
                      <span className="font-medium">{equip.inUse}/{equip.total}</span>
                    </div>
                    <div className="w-full bg-neutral-100 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${(equip.inUse/equip.total) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-neutral-500">
                      <span>{equip.location}</span>
                      <span>Next service: {equip.nextMaintenance}</span>
                    </div>
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

// Inventory Analytics Component
function InventoryAnalytics() {
  return (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Cost Savings</p>
              <p className="text-2xl font-bold text-green-600">$124K</p>
              <p className="text-xs text-green-600">vs last quarter</p>
            </div>
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Wastage Reduced</p>
              <p className="text-2xl font-bold text-orange-600">18%</p>
              <p className="text-xs text-orange-600">this month</p>
            </div>
            <TrendingDown className="h-6 w-6 text-orange-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Efficiency Score</p>
              <p className="text-2xl font-bold text-blue-600">94%</p>
              <p className="text-xs text-blue-600">operational</p>
            </div>
            <Target className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Compliance Rate</p>
              <p className="text-2xl font-bold text-purple-600">98.5%</p>
              <p className="text-xs text-purple-600">all departments</p>
            </div>
            <ShieldCheck className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Cost & Wastage Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-neutral-900">Cost & Wastage Monitoring</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">$45K</p>
                <p className="text-sm text-green-700">Saved This Month</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="text-2xl font-bold text-red-600">$12K</p>
                <p className="text-sm text-red-700">Waste Prevented</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-neutral-800">Top Savings Areas</h4>
              {[
                { category: "Bulk Purchasing", savings: "$18,500", trend: "up" },
                { category: "Expiry Prevention", savings: "$12,300", trend: "up" },
                { category: "Usage Optimization", savings: "$8,900", trend: "up" },
                { category: "Vendor Negotiation", savings: "$5,300", trend: "down" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="font-medium text-neutral-900">{item.category}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600 font-semibold">{item.savings}</span>
                    {item.trend === 'up' ? 
                      <TrendingUp className="h-4 w-4 text-green-600" /> :
                      <TrendingDown className="h-4 w-4 text-red-600" />
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-neutral-900">Operational Efficiency Trends</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">94%</p>
                <p className="text-sm text-blue-700">Overall Efficiency</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">2.3h</p>
                <p className="text-sm text-purple-700">Avg. Response Time</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-neutral-800">Efficiency Metrics</h4>
              {[
                { metric: "Stock Turnover Rate", score: 96, target: 95 },
                { metric: "Order Fulfillment", score: 94, target: 90 },
                { metric: "Supplier Performance", score: 89, target: 85 },
                { metric: "Inventory Accuracy", score: 98, target: 95 }
              ].map((metric, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-700">{metric.metric}</span>
                    <span className="text-sm text-neutral-600">{metric.score}% / {metric.target}%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${metric.score >= metric.target ? 'bg-green-500' : 'bg-orange-500'}`}
                      style={{ width: `${metric.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Integration */}
      <AIChat />
    </div>
  );
}