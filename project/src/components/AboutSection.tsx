import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Users, number: '50,000+', label: 'Patients Served' },
    { icon: Award, number: '25+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Emergency Care' },
    { icon: Heart, number: '98%', label: 'Patient Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-black">CareCloud</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              CareCloud represents the future of healthcare, combining cutting-edge medical technology 
              with compassionate patient care. Our mission is to make quality healthcare accessible, 
              efficient, and personalized for every patient.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over two decades of experience in healthcare innovation, we've built a comprehensive 
              digital health platform that connects patients, healthcare providers, and medical resources 
              in ways never before possible.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-gray-800 to-black w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <button className="bg-gradient-to-r from-gray-800 to-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gray-900 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"
                alt="Medical team"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our dedicated team of healthcare professionals brings together decades of experience 
                  and expertise to provide you with the highest quality medical care.
                </p>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-gray-800 to-black text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold mb-1">Innovation</div>
              <div className="text-gray-300">Driven Healthcare</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;