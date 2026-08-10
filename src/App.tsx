import { MotionConfig } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import TechStackSection from './sections/TechStackSection';
import ProcessSection from './sections/ProcessSection';
import ProjectsSection from './sections/ProjectsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ClientsSection from './sections/ClientsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div style={{ overflowX: 'clip' }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <TechStackSection />
        <ProcessSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ClientsSection />
        <ContactSection />
        <Footer />
      </div>
    </MotionConfig>
  );
}
