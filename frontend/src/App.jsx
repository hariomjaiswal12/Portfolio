import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import ResumeModal from './components/ResumeModal';

import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Profiles from './sections/Profiles';
import Contact from './sections/Contact';

import * as AdminPages from './pages/Admin';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <Router>
      <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white overflow-x-hidden">
        {/* Global Interactive Elements */}
        <CustomCursor />
        <ParticleBackground />
        <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar onOpenResume={handleOpenResume} />
                <main className="relative z-10">
                  <Hero onOpenResume={handleOpenResume} />
                  <About onOpenResume={handleOpenResume} />
                  <Experience />
                  <Education />
                  <Projects />
                  <Skills />
                  <Achievements />
                  <Profiles />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

function AdminPanel() {
  const [user, setUser] = useState(null);
  const { Login, Dashboard } = AdminPages;

  if (!user) {
    return <Login onLoginSuccess={setUser} />;
  }

  return <Dashboard />;
}

export default App;
