import { useState } from "react";
import { EmergencyMap } from "../components/EmergencyMap";
import { PatientInfoCard } from "../components/PatientInfoCard";
import { AIInsightsPanel } from "../components/AIInsightsPanel";
import { AIChat } from "../components/AIChat";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { 
  Ambulance,
  MapPin,
  Clock,
  Phone,
  AlertTriangle,
  Navigation,
  Radio,
  Activity,
  Heart,
  Thermometer,
  Zap
} from "lucide-react";

export default function AmbulanceDashboardPage() {
  const [activeEmergency, setActiveEmergency] = useState(true);
  const [eta, setEta] = useState("8 min");
  
  const emergencyData = {
    callId: "EMG-2025-0914-001",
    location: "Downtown Plaza, 5th & Main St",
    coordinates: { lat: 40.7128, lng: -74.0060 },
    reportedTime: "14:23",
    callType: "Motor Vehicle Accident",
    severity: "High Priority",
    patient: {
      name: "Unknown Male",
      age: "~35",
      condition: "Conscious, Multiple Injuries",
      vitals: {
        heartRate: "112 bpm",
        bloodPressure: "140/90",
        temperature: "98.6°F",
        oxygen: "94%"
      },
      image: undefined
    },
    ambulance: {
      unit: "AMB-07",
      crew: "Dr. Martinez, Paramedic Johnson",
      location: { lat: 40.7589, lng: -73.9851 },
      speed: "45 mph"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Emergency Header */}
      <header className="bg-white border-b border-red-100 shadow-sm">
        <div className="px-4 md:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 p-3 rounded-xl animate-pulse">
                <Ambulance className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-red-900">Emergency Response Dashboard</h1>
                <div className="flex items-center space-x-4 text-sm text-red-700">
                  <span className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{emergencyData.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Dispatched: {emergencyData.reportedTime}</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="text-right">
                <p className="text-2xl font-bold text-red-600">{eta}</p>
                <p className="text-sm text-red-700">ETA to Scene</p>
              </div>
              <Badge className="bg-red-100 text-red-800 border-red-200 animate-pulse">
                {emergencyData.severity}
              </Badge>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Contact Dispatch</span>
                  <span className="sm:hidden">Dispatch</span>
                </Button>
                <Button size="sm" variant="outline" className="border-red-200 text-red-700">
                  <Radio className="h-4 w-4 mr-2" />
                  <span>Radio</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <main className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Emergency Status Bar */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 animate-bounce" />
                  <h2 className="text-xl font-bold">Active Emergency Response</h2>
                </div>
                <p className="text-red-100">
                  Call ID: {emergencyData.callId} • {emergencyData.callType}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <p className="font-bold text-lg">{emergencyData.ambulance.unit}</p>
                  <p className="text-red-100">Ambulance Unit</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg">94%</p>
                  <p className="text-red-100">Patient O2 Sat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Map Section - Takes up 2 columns on xl screens */}
            <div className="xl:col-span-2 space-y-6">
              {/* Emergency Map */}
              <div className="bg-white rounded-2xl p-6 border shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Navigation className="h-5 w-5 text-blue-600" />
                    <span>Live Emergency Map</span>
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live Tracking</span>
                  </div>
                </div>
                <EmergencyMap emergencyData={emergencyData} />
              </div>

              {/* Route & Navigation Info */}
              <div className="bg-white rounded-2xl p-6 border shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Route Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center justify-center space-x-2 text-blue-600 mb-2">
                      <MapPin className="h-5 w-5" />
                      <span className="font-semibold">Distance</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-900">3.7 mi</p>
                    <p className="text-sm text-blue-700">To Scene</p>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="flex items-center justify-center space-x-2 text-green-600 mb-2">
                      <Zap className="h-5 w-5" />
                      <span className="font-semibold">Speed</span>
                    </div>
                    <p className="text-2xl font-bold text-green-900">45 mph</p>
                    <p className="text-sm text-green-700">Current</p>
                  </div>
                  
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="flex items-center justify-center space-x-2 text-orange-600 mb-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-semibold">ETA</span>
                    </div>
                    <p className="text-2xl font-bold text-orange-900">{eta}</p>
                    <p className="text-sm text-orange-700">Estimated</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Patient Info & AI Insights */}
            <div className="space-y-6">
              {/* Patient Information */}
              <div className="bg-white rounded-2xl p-6 border shadow-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <Activity className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Patient Information</h3>
                </div>
                <PatientInfoCard patient={emergencyData.patient} />
              </div>

              {/* Vital Signs Monitor */}
              <div className="bg-white rounded-2xl p-6 border shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Vital Signs Monitor</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-red-600" />
                      <span className="font-medium text-red-900">Heart Rate</span>
                    </div>
                    <span className="font-bold text-red-900">{emergencyData.patient.vitals.heartRate}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-900">Blood Pressure</span>
                    </div>
                    <span className="font-bold text-blue-900">{emergencyData.patient.vitals.bloodPressure}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-900">Temperature</span>
                    </div>
                    <span className="font-bold text-green-900">{emergencyData.patient.vitals.temperature}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-yellow-600" />
                      <span className="font-medium text-yellow-900">Oxygen Sat</span>
                    </div>
                    <span className="font-bold text-yellow-900">{emergencyData.patient.vitals.oxygen}</span>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-white rounded-2xl p-6 border shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Medical Insights</h3>
                <AIInsightsPanel 
                  patientData={emergencyData.patient} 
                  emergencyType={emergencyData.callType}
                />
              </div>
            </div>
          </div>

          {/* Ambulance Crew & Communication */}
          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ambulance Crew & Communication</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Active Crew - {emergencyData.ambulance.unit}</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-blue-100 text-blue-900">DM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">Dr. Martinez</p>
                      <p className="text-sm text-gray-600">Lead Paramedic</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 ml-auto">Active</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-green-100 text-green-900">PJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">Paramedic Johnson</p>
                      <p className="text-sm text-gray-600">EMT-P Certified</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 ml-auto">Active</Badge>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Quick Actions</h4>
                <div className="grid grid-cols-1 gap-3">
                  <Button className="justify-start" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Hospital ER
                  </Button>
                  <Button className="justify-start" variant="outline">
                    <Radio className="h-4 w-4 mr-2" />
                    Radio Dispatch
                  </Button>
                  <Button className="justify-start" variant="outline">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Request Backup
                  </Button>
                  <Button className="justify-start" variant="outline">
                    <Navigation className="h-4 w-4 mr-2" />
                    Update Route
                  </Button>
                </div>
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