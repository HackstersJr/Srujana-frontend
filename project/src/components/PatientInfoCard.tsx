import { User, Clock, AlertTriangle, Phone, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

interface PatientInfo {
  name: string;
  age: string;
  condition: string;
  vitals: {
    heartRate: string;
    bloodPressure: string;
    temperature: string;
    oxygen: string;
  };
  image?: string;
}

interface PatientInfoCardProps {
  patient: PatientInfo;
}

export function PatientInfoCard({ patient }: PatientInfoCardProps) {
  return (
    <div className="space-y-4">
      {/* Patient Header */}
      <div className="flex items-start space-x-4">
        <Avatar className="h-16 w-16 border-2 border-red-200">
          <AvatarImage src={patient.image} alt={patient.name} />
          <AvatarFallback className="bg-red-50 text-red-700 text-lg">
            <User className="h-8 w-8" />
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{patient.name}</h3>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <span>Age: {patient.age}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>Incident: 14:23</span>
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge className="bg-orange-100 text-orange-800 border-orange-200">
              <AlertTriangle className="h-3 w-3 mr-1" />
              {patient.condition}
            </Badge>
          </div>
        </div>
      </div>

      {/* Patient Details */}
      <div className="space-y-3">
        <div className="border-t pt-3">
          <h4 className="font-medium text-gray-900 text-sm mb-3">Incident Details</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Type:</span>
              <span className="font-medium text-gray-900">Motor Vehicle Accident</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mechanism:</span>
              <span className="font-medium text-gray-900">T-bone collision</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Conscious:</span>
              <Badge className="bg-green-100 text-green-800 text-xs">Yes</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Trapped:</span>
              <Badge className="bg-red-100 text-red-800 text-xs">No</Badge>
            </div>
          </div>
        </div>

        <div className="border-t pt-3">
          <h4 className="font-medium text-gray-900 text-sm mb-3">Reported Injuries</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-red-50 rounded-lg">
              <span className="text-sm text-red-900">Chest pain</span>
              <Badge className="bg-red-200 text-red-800 text-xs">Severe</Badge>
            </div>
            <div className="flex items-center justify-between p-2 bg-yellow-50 rounded-lg">
              <span className="text-sm text-yellow-900">Possible rib fractures</span>
              <Badge className="bg-yellow-200 text-yellow-800 text-xs">Moderate</Badge>
            </div>
            <div className="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
              <span className="text-sm text-orange-900">Neck stiffness</span>
              <Badge className="bg-orange-200 text-orange-800 text-xs">Minor</Badge>
            </div>
          </div>
        </div>

        <div className="border-t pt-3">
          <h4 className="font-medium text-gray-900 text-sm mb-3">Medical History</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">Hypertension (controlled)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">No known allergies</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">Last meal: 2 hours ago</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-3">
          <h4 className="font-medium text-gray-900 text-sm mb-3">Emergency Contacts</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-xs text-gray-600">Spouse</p>
                </div>
              </div>
              <Phone className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
            
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Michael Johnson</p>
                  <p className="text-xs text-gray-600">Son</p>
                </div>
              </div>
              <Phone className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
          </div>
        </div>

        <div className="border-t pt-3">
          <h4 className="font-medium text-gray-900 text-sm mb-3">Insurance Information</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Provider:</span>
              <span className="font-medium text-gray-900">Blue Cross Blue Shield</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Policy #:</span>
              <span className="font-medium text-gray-900">****-****-1234</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <Badge className="bg-green-100 text-green-800 text-xs">Active</Badge>
            </div>
          </div>
        </div>

        {/* Treatment Timeline */}
        <div className="border-t pt-3">
          <h4 className="font-medium text-gray-900 text-sm mb-3">Treatment Timeline</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">14:25 - Initial Assessment</p>
                <p className="text-xs text-gray-600">Patient conscious, vitals stable</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">14:27 - IV Access Established</p>
                <p className="text-xs text-gray-600">18G IV in left arm, normal saline</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">14:30 - Pain Management</p>
                <p className="text-xs text-gray-600">Morphine 2mg IV administered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}