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
    <div className="space-y-4 md:space-y-6">
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Analytics Dashboard</h2>
        <p className="text-neutral-500 text-sm md:text-base">Performance metrics and key indicators</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {analyticsData.map((item, index) => (
          <div key={index} className="bg-white border rounded-xl p-4 md:p-6">
            <div className="space-y-2">
              <h3 className="text-xs md:text-sm text-neutral-600">{item.metric}</h3>
              <div className="text-xl md:text-2xl font-light text-neutral-900">{item.value}</div>
              <p className={`text-xs md:text-sm ${
                item.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {item.change}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white border rounded-xl p-4 md:p-6">
        <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Monthly Overview</h3>
        <div className="h-32 md:h-48 flex items-center justify-center text-neutral-500 text-sm md:text-base">
          Chart visualization would go here
        </div>
      </div>
    </div>
  );
}