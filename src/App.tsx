import React from 'react';
import ProfileCard from './components/layout/ProfileCard';
import AboutMeSection from './components/sections/AboutMeSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 px-4">
      {/* Left Column */}
      <header className="lg:w-1/3 lg:h-screen lg:sticky top-0 flex items-center justify-center py-8 lg:py-0">
        <ProfileCard />
      </header>

      {/* Right Column */}
      <main className="lg:w-2/3">
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
