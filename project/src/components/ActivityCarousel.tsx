export function ActivityCarousel() {
  const activities = [
    {
      title: "Patient Admission",
      patient: "John Anderson",
      time: "2:30 PM",
      type: "admission",
      priority: "high"
    },
    {
      title: "Lab Results",
      patient: "Sarah Wilson",
      time: "1:45 PM", 
      type: "lab",
      priority: "medium"
    },
    {
      title: "Surgery Completed",
      patient: "Michael Brown",
      time: "12:15 PM",
      type: "surgery",
      priority: "low"
    },
    {
      title: "Emergency Alert",
      patient: "Emma Davis",
      time: "11:30 AM",
      type: "emergency",
      priority: "high"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case "high": return "bg-red-100 text-red-700 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
        <p className="text-neutral-500">Latest patient updates and system notifications</p>
      </div>
      
      <div className="grid gap-4">
        {activities.map((activity, index) => (
          <div 
            key={index} 
            className="bg-white border rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-neutral-900">{activity.title}</h3>
                <p className="text-sm text-neutral-600">{activity.patient}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-neutral-500">{activity.time}</span>
                <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityColor(activity.priority)}`}>
                  {activity.priority}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}