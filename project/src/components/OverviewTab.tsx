import { StatsCard } from "./StatsCard";
import { 
  Calendar, 
  Users, 
  Activity, 
  AlertTriangle, 
  BedDouble,
  Heart
} from "lucide-react";

export function OverviewTab() {
  const statsData = [
    {
      title: "Today's Appointments",
      value: "24",
      change: "+12% from yesterday",
      changeType: "increase" as const,
      icon: Calendar,
      subtitle: "3 urgent, 21 regular"
    },
    {
      title: "Active Patients",
      value: "187",
      change: "+5 new admissions",
      changeType: "increase" as const,
      icon: Users,
      subtitle: "Ward capacity: 89%",
      progress: 89
    },
    {
      title: "Pending Surgeries",
      value: "8",
      change: "2 scheduled today",
      changeType: "neutral" as const,
      icon: Activity,
      subtitle: "Next: 2:30 PM"
    },
    {
      title: "Emergency Cases",
      value: "3",
      change: "-2 from last hour",
      changeType: "decrease" as const,
      icon: AlertTriangle,
      subtitle: "All stable"
    },
    {
      title: "Bed Occupancy",
      value: "142/160",
      change: "88.8% occupied",
      changeType: "neutral" as const,
      icon: BedDouble,
      subtitle: "18 beds available",
      progress: 88.8
    },
    {
      title: "Critical Vitals",
      value: "6",
      change: "Requires attention",
      changeType: "increase" as const,
      icon: Heart,
      subtitle: "ICU monitoring"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Today's Overview</h2>
        <p className="text-neutral-500">Key metrics and important information at a glance</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}