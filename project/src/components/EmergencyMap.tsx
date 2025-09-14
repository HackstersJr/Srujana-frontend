import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Building2, Ambulance, AlertCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface EmergencyMapProps {
  emergencyData: {
    location: string;
    coordinates: { lat: number; lng: number };
    callType: string;
    ambulance: {
      unit: string;
      location: { lat: number; lng: number };
      speed: string;
    };
  };
}

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icons for different marker types
const emergencyIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  className: 'emergency-marker'
});

const ambulanceIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
      <path d="M10 10H6"/>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"/>
      <path d="M8 8v4"/>
      <path d="M9 18h6"/>
      <circle cx="17" cy="18" r="2"/>
      <circle cx="7" cy="18" r="2"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  className: 'ambulance-marker'
});

const hospitalIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
      <path d="M3 21h18"/>
      <path d="M5 21V7l8-4v18"/>
      <path d="M19 21V11l-6-4"/>
    </svg>
  `),
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
  className: 'hospital-marker'
});

export function EmergencyMap({ emergencyData }: EmergencyMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  // Mock hospital locations
  const nearbyHospitals = [
    { name: "St. Mary's General", location: { lat: 40.7300, lng: -74.0100 }, distance: "2.1 mi", eta: "6 min" },
    { name: "Central Medical Center", location: { lat: 40.7400, lng: -73.9900 }, distance: "3.4 mi", eta: "9 min" },
    { name: "Emergency Hospital", location: { lat: 40.7200, lng: -73.9800 }, distance: "4.2 mi", eta: "12 min" }
  ];

  // Calculate center point between emergency and ambulance
  const center: [number, number] = [
    (emergencyData.coordinates.lat + emergencyData.ambulance.location.lat) / 2,
    (emergencyData.coordinates.lng + emergencyData.ambulance.location.lng) / 2
  ];

  // Route coordinates
  const routeCoordinates: [number, number][] = [
    [emergencyData.ambulance.location.lat, emergencyData.ambulance.location.lng],
    [emergencyData.coordinates.lat, emergencyData.coordinates.lng]
  ];

  return (
    <div className="space-y-4">
      {/* Map Container */}
      <div className="w-full h-96 rounded-xl overflow-hidden border border-gray-200 relative">
        {!mapLoaded ? (
          <div className="flex items-center justify-center h-full bg-gray-50">
            <div className="text-center space-y-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-sm text-gray-600">Loading emergency map...</p>
            </div>
          </div>
        ) : (
          <MapContainer
            center={center}
            zoom={13}
            className="w-full h-full"
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Emergency Location Marker */}
            <Marker 
              position={[emergencyData.coordinates.lat, emergencyData.coordinates.lng]} 
              icon={emergencyIcon}
            >
              <Popup>
                <div className="p-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <span className="font-semibold text-red-900">Emergency Scene</span>
                  </div>
                  <p className="text-sm text-gray-700">{emergencyData.location}</p>
                  <p className="text-sm text-gray-600">{emergencyData.callType}</p>
                </div>
              </Popup>
            </Marker>

            {/* Ambulance Location Marker */}
            <Marker 
              position={[emergencyData.ambulance.location.lat, emergencyData.ambulance.location.lng]} 
              icon={ambulanceIcon}
            >
              <Popup>
                <div className="p-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <Ambulance className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold text-blue-900">{emergencyData.ambulance.unit}</span>
                  </div>
                  <p className="text-sm text-gray-700">Speed: {emergencyData.ambulance.speed}</p>
                  <p className="text-sm text-gray-600">En route to emergency</p>
                </div>
              </Popup>
            </Marker>

            {/* Hospital Markers */}
            {nearbyHospitals.map((hospital) => (
              <Marker 
                key={hospital.name}
                position={[hospital.location.lat, hospital.location.lng]} 
                icon={hospitalIcon}
              >
                <Popup>
                  <div className="p-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <Building2 className="h-4 w-4 text-green-600" />
                      <span className="font-semibold text-green-900">{hospital.name}</span>
                    </div>
                    <p className="text-sm text-gray-700">Distance: {hospital.distance}</p>
                    <p className="text-sm text-gray-600">ETA: {hospital.eta}</p>
                  </div>
                </Popup>
              </Marker>
            ))}

            {/* Route Line */}
            <Polyline 
              positions={routeCoordinates} 
              color="#3b82f6" 
              weight={4}
              opacity={0.8}
              dashArray="10, 10"
            />
          </MapContainer>
        )}
        
        {/* Map Controls Overlay */}
        <div className="absolute top-4 right-4 z-[1000] bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-gray-900">Live Tracking</span>
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 z-[1000] bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 space-y-2 text-xs">
          <h4 className="font-medium text-gray-900">Legend</h4>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span className="text-gray-700">Emergency Scene</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700">Ambulance</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="text-gray-700">Hospital</span>
          </div>
        </div>
      </div>

      {/* Hospital Options */}
      <div className="space-y-2">
        <h4 className="font-medium text-gray-900 text-sm">Nearest Hospitals</h4>
        <div className="grid grid-cols-1 gap-2">
          {nearbyHospitals.map((hospital, index) => (
            <div 
              key={hospital.name} 
              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                index === 0 ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Building2 className={`h-4 w-4 ${index === 0 ? 'text-green-600' : 'text-gray-400'}`} />
                <div>
                  <p className={`font-medium text-sm ${index === 0 ? 'text-green-900' : 'text-gray-900'}`}>
                    {hospital.name}
                  </p>
                  <p className={`text-xs ${index === 0 ? 'text-green-700' : 'text-gray-600'}`}>
                    {hospital.distance} • ETA {hospital.eta}
                  </p>
                </div>
              </div>
              {index === 0 && (
                <Badge className="bg-green-100 text-green-800 text-xs">
                  Recommended
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}