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
  Pill
} from "lucide-react";

export default function NurseDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterWard, setFilterWard] = useState("all");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewContent />;
      case "meds":
        return <MedicineAdministration />;
      case "monitoring":
        return <PatientMonitoring />;
      case "staff":
        return <StaffManagement />;
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
              <div className="bg-neutral-900 p-2 rounded-xl">
                <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div>
                <h1 className="text-base md:text-lg font-medium">Nurse Dashboard</h1>
                <p className="text-sm text-neutral-600">St. Mary's General Hospital</p>
              </div>
            </div>
            
            {/* General Dashboard Objects */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
              {/* Search Bar */}
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <Input
                  placeholder="Search patients or medicines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              
              {/* Filter/Sort Controls */}
              <Select value={filterWard} onValueChange={setFilterWard}>
                <SelectTrigger className="w-full sm:w-32">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Wards</SelectItem>
                  <SelectItem value="icu">ICU</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="surgery">Surgery</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Notification Bell */}
              <Button variant="ghost" size="icon" className="relative h-8 w-8 md:h-10 md:w-10">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-3 w-3 md:h-4 md:w-4 p-0 text-xs bg-red-500 text-white">
                  5
                </Badge>
              </Button>
              
              <div className="flex items-center space-x-3">
                <Avatar className="h-7 w-7 md:h-8 md:w-8">
                  <AvatarFallback className="bg-neutral-100 text-neutral-900 text-xs md:text-sm">NS</AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">Nurse Sarah Smith</p>
                  <p className="text-xs text-neutral-600">ICU Ward</p>
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
                  variant={activeTab === "meds" ? "default" : "ghost"}
                  onClick={() => setActiveTab("meds")}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <Pill className="h-4 w-4" />
                  <span className="hidden sm:inline">Medications</span>
                  <span className="sm:hidden">Meds</span>
                </Button>
                <Button
                  variant={activeTab === "monitoring" ? "default" : "ghost"}
                  onClick={() => setActiveTab("monitoring")}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <Activity className="h-4 w-4" />
                  <span className="hidden sm:inline">Patient Monitoring</span>
                  <span className="sm:hidden">Monitor</span>
                </Button>
                <Button
                  variant={activeTab === "staff" ? "default" : "ghost"}
                  onClick={() => setActiveTab("staff")}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <UserCheck className="h-4 w-4" />
                  <span>Staff</span>
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
          <div className="bg-white rounded-2xl p-4 md:p-8 border">
            <div className="flex flex-col lg:flex-row items-start justify-between space-y-4 lg:space-y-0">
              <div className="space-y-4 flex-1">
                <div>
                  <h2 className="text-xl md:text-2xl font-medium mb-1">Good Afternoon, Nurse Smith</h2>
                  <p className="text-neutral-600 text-sm md:text-base">You have 12 medication administrations and 8 vital checks scheduled for today</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                  <div className="flex items-center space-x-2 text-neutral-700">
                    <Clock className="h-4 w-4" />
                    <span>Next: Aspirin for Patient 5</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-700">
                    <Users className="h-4 w-4" />
                    <span>8 patients under care</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block text-right">
                <p className="text-2xl md:text-3xl font-light text-neutral-900">14</p>
                <p className="text-sm text-neutral-600">September</p>
                <p className="text-xs text-neutral-500">Saturday</p>
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
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Administer Now</span>
        </Button>
        <Button variant="outline" className="flex items-center space-x-2">
          <Activity className="h-4 w-4" />
          <span>Log Vital</span>
        </Button>
        <Button variant="outline" className="flex items-center space-x-2">
          <UserCheck className="h-4 w-4" />
          <span>Reassign Staff</span>
        </Button>
      </div>

      {/* Medicine Administration Overview */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border">
        <h3 className="text-lg md:text-xl font-medium mb-4">Medicine Administration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg border">
            <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
            <p className="text-sm text-neutral-500">Given Today</p>
            <p className="text-lg font-medium text-green-700">24</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border">
            <Clock className="h-8 w-8 text-yellow-600 mb-2" />
            <p className="text-sm text-neutral-500">Pending</p>
            <p className="text-lg font-medium text-yellow-700">8</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border">
            <XCircle className="h-8 w-8 text-red-600 mb-2" />
            <p className="text-sm text-neutral-500">Missed</p>
            <p className="text-lg font-medium text-red-700">2</p>
          </div>
        </div>
      </div>

      {/* Patient Monitoring Overview */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border">
        <h3 className="text-lg md:text-xl font-medium mb-4">Patient Monitoring</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border">
            <Activity className="h-6 w-6 text-blue-600 mb-2" />
            <p className="text-sm text-neutral-500">Avg Heart Rate</p>
            <p className="text-lg font-medium text-blue-700">78 BPM</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border">
            <Zap className="h-6 w-6 text-purple-600 mb-2" />
            <p className="text-sm text-neutral-500">Avg BP</p>
            <p className="text-lg font-medium text-purple-700">120/80</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border">
            <Stethoscope className="h-6 w-6 text-green-600 mb-2" />
            <p className="text-sm text-neutral-500">Avg O₂</p>
            <p className="text-lg font-medium text-green-700">96%</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border">
            <Activity className="h-6 w-6 text-orange-600 mb-2" />
            <p className="text-sm text-neutral-500">Avg Temp</p>
            <p className="text-lg font-medium text-orange-700">98.6°F</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Medicine Administration Component
function MedicineAdministration() {
  return (
    <div className="space-y-6">
      {/* Medication Reminder Cards */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border">
        <h3 className="text-lg md:text-xl font-medium mb-4">Medication Reminders</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-yellow-50 rounded-lg border">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium">Patient 5 - John Doe</h4>
              <Badge className="bg-yellow-500">Pending</Badge>
            </div>
            <p className="text-sm text-neutral-600 mb-2">Aspirin 81mg</p>
            <p className="text-sm text-neutral-500 mb-4">Dosage: 1 tablet | Time: 2:00 PM</p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">Snooze</Button>
              <Button size="sm">Mark Given</Button>
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium">Patient 12 - Jane Smith</h4>
              <Badge className="bg-green-500">Given</Badge>
            </div>
            <p className="text-sm text-neutral-600 mb-2">Lisinopril 10mg</p>
            <p className="text-sm text-neutral-500 mb-4">Dosage: 1 tablet | Time: 8:00 AM</p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" disabled>Snooze</Button>
              <Button size="sm" disabled>Mark Given</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Medication Checklist Table */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border">
        <h3 className="text-lg md:text-xl font-medium mb-4">Medication Checklist</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Patient</th>
                <th className="text-left p-2">Medicine</th>
                <th className="text-left p-2">Dosage</th>
                <th className="text-left p-2">Time</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Patient 5</td>
                <td className="p-2">Aspirin</td>
                <td className="p-2">81mg</td>
                <td className="p-2">2:00 PM</td>
                <td className="p-2"><Badge className="bg-yellow-500">Pending</Badge></td>
                <td className="p-2"><Button size="sm">Administer</Button></td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Patient 12</td>
                <td className="p-2">Lisinopril</td>
                <td className="p-2">10mg</td>
                <td className="p-2">8:00 AM</td>
                <td className="p-2"><Badge className="bg-green-500">Given</Badge></td>
                <td className="p-2"><Button size="sm" disabled>Administer</Button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Patient Monitoring Component
function PatientMonitoring() {
  const [selectedPatient, setSelectedPatient] = useState('Patient 5');
  
  const patients = [
    {
      id: 'Patient 5',
      name: 'John Doe',
      vitals: { hr: 75, spo2: 98, bp: '118/78', temp: 98.2 },
      status: 'stable',
      earlyWarningScore: 2,
      riskLevel: 'low'
    },
    {
      id: 'Patient 12',
      name: 'Jane Smith',
      vitals: { hr: 92, spo2: 89, bp: '145/95', temp: 99.1 },
      status: 'critical',
      earlyWarningScore: 7,
      riskLevel: 'high'
    },
    {
      id: 'Patient 7',
      name: 'Mike Johnson',
      vitals: { hr: 110, spo2: 94, bp: '185/105', temp: 99.8 },
      status: 'urgent',
      earlyWarningScore: 9,
      riskLevel: 'critical'
    },
    {
      id: 'Patient 3',
      name: 'Sarah Wilson',
      vitals: { hr: 68, spo2: 99, bp: '115/75', temp: 97.8 },
      status: 'stable',
      earlyWarningScore: 1,
      riskLevel: 'low'
    }
  ];

  const currentPatient = patients.find(p => p.id === selectedPatient) || patients[0];

  const getVitalColor = (vital: string, value: number | string) => {
    switch (vital) {
      case 'hr':
        const hr = value as number;
        if (hr < 60 || hr > 100) return 'bg-red-50 border-red-200 text-red-700';
        return 'bg-green-50 border-green-200 text-green-700';
      case 'spo2':
        const spo2 = value as number;
        if (spo2 < 95) return 'bg-red-50 border-red-200 text-red-700';
        if (spo2 < 98) return 'bg-yellow-50 border-yellow-200 text-yellow-700';
        return 'bg-green-50 border-green-200 text-green-700';
      case 'temp':
        const temp = value as number;
        if (temp < 97 || temp > 99.5) return 'bg-red-50 border-red-200 text-red-700';
        return 'bg-green-50 border-green-200 text-green-700';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-700';
    }
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Patient Selector */}
      <div className="bg-white rounded-2xl p-4 border">
        <h3 className="text-lg font-medium mb-4">Select Patient</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {patients.map(patient => (
            <button
              key={patient.id}
              onClick={() => setSelectedPatient(patient.id)}
              className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                selectedPatient === patient.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {patient.name}
            </button>
          ))}
        </div>
      </div>

      {/* Critical Patient Priority Queue */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border">
        <h3 className="text-lg md:text-xl font-medium mb-4">Critical Patient Priority Queue</h3>
        <div className="space-y-3">
          {patients
            .filter(p => p.status !== 'stable')
            .sort((a, b) => b.earlyWarningScore - a.earlyWarningScore)
            .map(patient => (
              <div key={patient.id} className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${patient.status === 'critical' ? 'bg-red-600' : 'bg-orange-500'}`}></div>
                  <div>
                    <p className="font-medium text-red-800">{patient.name}</p>
                    <p className="text-sm text-red-600">Warning Score: {patient.earlyWarningScore}</p>
                  </div>
                </div>
                <Badge className={`${patient.status === 'critical' ? 'bg-red-600' : 'bg-orange-500'} text-white`}>
                  {patient.status.toUpperCase()}
                </Badge>
              </div>
            ))}
        </div>
      </div>

      {/* Live Vitals Panel for Selected Patient */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border">
        <h3 className="text-lg md:text-xl font-medium mb-4">Live Vitals - {currentPatient.name}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`p-4 rounded-lg border ${getVitalColor('hr', currentPatient.vitals.hr)}`}>
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="h-5 w-5" />
              <span className="text-sm font-medium">Heart Rate</span>
            </div>
            <p className="text-2xl font-bold">{currentPatient.vitals.hr}</p>
            <p className="text-xs">BPM</p>
          </div>
          <div className={`p-4 rounded-lg border ${getVitalColor('spo2', currentPatient.vitals.spo2)}`}>
            <div className="flex items-center space-x-2 mb-2">
              <Stethoscope className="h-5 w-5" />
              <span className="text-sm font-medium">SpO₂</span>
            </div>
            <p className="text-2xl font-bold">{currentPatient.vitals.spo2}</p>
            <p className="text-xs">%</p>
          </div>
          <div className={`p-4 rounded-lg border ${getVitalColor('bp', currentPatient.vitals.bp)}`}>
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-medium">Blood Pressure</span>
            </div>
            <p className="text-2xl font-bold">{currentPatient.vitals.bp}</p>
            <p className="text-xs">mmHg</p>
          </div>
          <div className={`p-4 rounded-lg border ${getVitalColor('temp', currentPatient.vitals.temp)}`}>
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="h-5 w-5" />
              <span className="text-sm font-medium">Temperature</span>
            </div>
            <p className="text-2xl font-bold">{currentPatient.vitals.temp}</p>
            <p className="text-xs">°F</p>
          </div>
        </div>
      </div>

      {/* Early Warning Score Gauge */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border">
        <h3 className="text-lg md:text-xl font-medium mb-4">Early Warning Score - {currentPatient.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
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
                    stroke={currentPatient.earlyWarningScore > 7 ? '#ef4444' : currentPatient.earlyWarningScore > 4 ? '#f59e0b' : '#10b981'}
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${(currentPatient.earlyWarningScore / 10) * 251.2} 251.2`}
                    className="transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold">{currentPatient.earlyWarningScore}</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-neutral-500">Risk Level</p>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getRiskColor(currentPatient.riskLevel)}`}></div>
                  <span className="font-medium capitalize">{currentPatient.riskLevel}</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-neutral-600">
              <p>Score 0-3: Low risk | 4-6: Medium risk | 7+: High risk</p>
              <p className="mt-1">AI-calculated based on vitals, symptoms, and medical history</p>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Recovery Graphs */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border">
        <h3 className="text-lg md:text-xl font-medium mb-4">Recovery Trends - {currentPatient.name}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Heart Rate Trend (7 days)</h4>
            <svg width="100%" height="150" className="w-full">
              <defs>
                <linearGradient id="hrGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                points="0,120 50,110 100,105 150,100 200,95 250,90 300,85"
              />
              <polygon
                fill="url(#hrGradient)"
                points="0,120 50,110 100,105 150,100 200,95 250,90 300,85 300,150 0,150"
              />
              <text x="0" y="140" className="text-xs fill-neutral-500">7d ago</text>
              <text x="270" y="140" className="text-xs fill-neutral-500">Today</text>
            </svg>
            <p className="text-sm text-green-600 mt-2">↗ Improving trend</p>
          </div>
          <div>
            <h4 className="font-medium mb-3">SpO₂ Trend (7 days)</h4>
            <svg width="100%" height="150" className="w-full">
              <defs>
                <linearGradient id="spo2Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                points="0,100 50,95 100,90 150,88 200,92 250,89 300,85"
              />
              <polygon
                fill="url(#spo2Gradient)"
                points="0,100 50,95 100,90 150,88 200,92 250,89 300,85 300,150 0,150"
              />
              <text x="0" y="140" className="text-xs fill-neutral-500">7d ago</text>
              <text x="270" y="140" className="text-xs fill-neutral-500">Today</text>
            </svg>
            <p className="text-sm text-green-600 mt-2">↗ Stable improvement</p>
          </div>
        </div>
        
        {/* Recovery Progress Summary */}
        <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
          <h4 className="font-medium mb-2">Recovery Assessment</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-neutral-500">Overall Trend</p>
              <p className="font-medium text-green-600">Improving</p>
            </div>
            <div>
              <p className="text-neutral-500">Days Since Admission</p>
              <p className="font-medium">5 days</p>
            </div>
            <div>
              <p className="text-neutral-500">Expected Discharge</p>
              <p className="font-medium">2-3 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Update Panel */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border">
        <h3 className="text-lg md:text-xl font-medium mb-4">Quick Actions - {currentPatient.name}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="h-12">Update Vitals</Button>
          <Button variant="outline" className="h-12">Alert Doctor</Button>
          <Button variant="outline" className="h-12">Add Note</Button>
        </div>
      </div>
    </div>
  );
}

// Staff Management Component
function StaffManagement() {
  return (
    <div className="space-y-6">
      {/* Shift Planner Calendar */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border">
        <h3 className="text-lg md:text-xl font-medium mb-4">Shift Planner</h3>
        <div className="grid grid-cols-7 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-center p-2 bg-neutral-50 rounded">
              <p className="text-sm font-medium">{day}</p>
              <p className="text-xs text-neutral-500">8AM-4PM</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fatigue Detection Indicator */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
        <div className="flex items-center space-x-2 mb-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
          <h3 className="text-lg font-medium text-yellow-800">Fatigue Alert</h3>
        </div>
        <p className="text-yellow-700">Nurse Johnson has worked 12+ hours consecutively. Consider break or replacement.</p>
      </div>

      {/* Skill-Based Assignment Cards */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border">
        <h3 className="text-lg md:text-xl font-medium mb-4">Skill-Based Assignments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border">
            <h4 className="font-medium mb-2">ICU Specialists</h4>
            <ul className="text-sm space-y-1">
              <li>• Nurse Sarah Smith</li>
              <li>• Nurse Mike Johnson</li>
            </ul>
            <Button size="sm" className="mt-2">Assign ICU Task</Button>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border">
            <h4 className="font-medium mb-2">Pediatrics</h4>
            <ul className="text-sm space-y-1">
              <li>• Nurse Emily Davis</li>
              <li>• Nurse Alex Wilson</li>
            </ul>
            <Button size="sm" className="mt-2">Assign Peds Task</Button>
          </div>
        </div>
      </div>

      {/* Real-Time Availability Panel */}
      <div className="bg-white rounded-2xl p-4 md:p-8 border">
        <h3 className="text-lg md:text-xl font-medium mb-4">Staff Availability</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 bg-green-50 rounded">
            <span>Nurse Sarah Smith</span>
            <Badge className="bg-green-500">On Duty</Badge>
          </div>
          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
            <span>Nurse Mike Johnson</span>
            <Badge className="bg-yellow-500">On Break</Badge>
          </div>
          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
            <span>Nurse Emily Davis</span>
            <Badge className="bg-red-500">Off Duty</Badge>
          </div>
        </div>
      </div>

      {/* AI Chat Integration */}
      <AIChat />
    </div>
  );
}