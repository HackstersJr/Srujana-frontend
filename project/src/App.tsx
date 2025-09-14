import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FluidGlass from './components/FluidGlass';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import NavBar from './components/NavBar';

function HomePage() {
  return (
    <div className="relative min-h-screen bg-white">
      <NavBar />
      {/* Masonry Background */}
      <div className="fixed inset-0 z-0">
        <FluidGlass />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Landing Page Section */}
        <section id="overview">
          <LandingPage />
        </section>

        {/* Other Sections */}
        <div className="bg-white">
          <section id="services">
            <ServicesSection />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;