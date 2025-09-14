import React, { useState } from 'react';
import { Brain, Activity, Users, Calendar, Truck, Bot, BarChart, AlertTriangle, Bed, Clock, Shield, Zap } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const topServices = [
    {
      icon: Brain,
      title: 'Advanced Predictive Demand Forecasting',
      description: 'Machine learning models analyze historical consumption, seasonal trends, epidemics, and scheduled procedures to optimize medicine stock levels, preventing shortages and overstocking.',
    },
    {
      icon: BarChart,
      title: 'Customizable Analytics Dashboards',
      description: 'Hospitals receive tailored visualizations of trends, costs, wastage, compliance, and actionable recommendations adapted to their unique workflows and performance metrics.',
    },
    {
      icon: Shield,
      title: 'Embedded Drug Interaction & Safety Checks',
      description: 'Automated prescription validation modules detect contraindications, allergies, and drug interactions before dispensing drugs to enhance patient safety.',
    },
    {
      icon: Activity,
      title: 'Outcome-Based Effectiveness Analysis',
      description: 'Detailed analysis of medication outcomes stratified by demographics and clinical profiles enables identification of the most effective treatments for specific patient groups.',
    },
    {
      icon: AlertTriangle,
      title: 'Automated Nurse Reminders',
      description: 'Timely alerts and reminders ensure accurate and on-time medication administration to patients, reducing errors and improving care adherence.',
    },
    {
      icon: Truck,
      title: 'Multi-Department & Facility Stock Synchronization',
      description: 'Seamless real-time balancing of medicine stocks across hospital branches, wards, and pharmacies to optimize inventory distribution.',
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: 'Supplier & Logistics Optimization',
      description: 'AI recommends the best suppliers based on delivery reliability, cost, and timelines, with contingency suggestions to mitigate supply chain risks.',
    },
    {
      icon: Users,
      title: 'Predictive Staffing',
      description: 'Dynamic scheduling forecasts patient inflow and acuity, allocating appropriate clinical and support staff to reduce understaffing, overtime, and staff burnout.',
    },
    {
      icon: Bed,
      title: 'Smart Equipment & Bed Management',
      description: 'Intelligent prediction-based allocation of medical equipment and dynamic bed assignments improve resource utilization and patient flow.',
    },
    {
      icon: Truck,
      title: 'Automated Supply Chain Coordination',
      description: 'Streamlined communication with suppliers and swift reallocation of emergency resources enhance operational resilience.',
    },
    {
      icon: Brain,
      title: 'Skill-Based Staff Matching & Fatigue Detection',
      description: 'Assign clinicians based on credentials, specialties, preferences, and fatigue levels, ensuring optimal care delivery and workforce well-being.',
    },
    {
      icon: Calendar,
      title: 'Predictive No-Show Detection',
      description: 'AI identifies high-risk patients for no-shows and proactively refills canceled appointment slots to improve clinic utilization.',
    },
    {
      icon: Clock,
      title: 'Intelligent Slot Optimization',
      description: 'Real-time scheduling adjustments maximize provider efficiency while minimizing patient wait times.',
    },
    {
      icon: Bot,
      title: '24/7 AI Chatbot Self-Service Booking',
      description: 'Automated handling of appointment scheduling, rescheduling, and cancellations without staff intervention.',
    },
    {
      icon: Clock,
      title: 'Real-Time Wait Time Transparency',
      description: 'Patients receive live updates on wait times and alternative appointment options to enhance experience and reduce congestion.',
    }
  ];

  const displayedServices = showAll ? [...topServices, ...additionalServices] : topServices;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our AI-Powered <span className="text-black">Healthcare Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Comprehensive intelligent healthcare management systems designed to optimize hospital operations, enhance patient care, and streamline medical workflows through advanced AI and machine learning technologies.
          </p>
        </div>

        {/* Animated services grid */}
        <div className={`transition-all duration-700 md:overflow-hidden ${
            showAll ? 'md:max-h-[2000px]' : 'md:max-h-[700px]'
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {displayedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-gray-300"
                >
                  <div className="bg-gradient-to-r from-gray-800 to-black w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-gray-800 to-black text-white px-8 py-3 rounded-full font-semibold text-base hover:from-gray-900 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {showAll ? 'Show Less Services' : 'View All Services'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;