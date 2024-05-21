// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Specialties from './components/Specialties'
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import AboutMe from './components/AboutMe';
import {useInView} from 'react-intersection-observer'
function FadeInSection({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: true 
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}

  
const App = () => {
  return (
    <div className="bg-slate-800 flex flex-col min-h-screen">
      <Header />
      <FadeInSection>
        <AboutMe />
      </FadeInSection>
      <FadeInSection>
        <Specialties/>
      </FadeInSection>
      <FadeInSection>
        <AboutMe />
      </FadeInSection>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
