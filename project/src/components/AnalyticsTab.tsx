export function AnalyticsTab() {
  const analyticsData = [
    {
      metric: "Patient Satisfaction",
      value: "94.2%",
      change: "+2.1% this month",
      trend: "up"
    },
    {
      metric: "Average Wait Time", 
      value: "18 min",
      change: "-3 min from last week",
      trend: "down"
    },
    {
      metric: "Bed Utilization",
      value: "88.8%",
      change: "+5.2% this month", 
      trend: "up"
    },
    {
      metric: "Emergency Response Time",
      value: "4.2 min",
      change: "-1.1 min from last week",
      trend: "down"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Analytics Dashboard</h2>
        <p className="text-neutral-500">Performance metrics and key indicators</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {analyticsData.map((item, index) => (
          <div key={index} className="bg-white border rounded-xl p-6">
            <div className="space-y-2">
              <h3 className="text-sm text-neutral-600">{item.metric}</h3>
              <div className="text-2xl font-light text-neutral-900">{item.value}</div>
              <p className={`text-sm ${
                item.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {item.change}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-lg font-medium mb-4">Monthly Overview</h3>
        <div className="h-48 flex items-center justify-center text-neutral-500">
          Chart visualization would go here
        </div>
      </div>
    </div>
  );
}