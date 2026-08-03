import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import HighlightSection from '../components/HighlightSection';
import Achievements from '../components/Achievements';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      {/* <HighlightSection /> */}
      <Projects />
      <Achievements />
      {/* <Education /> */}
      <Certificates />
      <Contact />
    </>
  );
}

export default Home;