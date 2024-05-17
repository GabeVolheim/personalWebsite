// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <div className="bg-slate-800 flex flex-col min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
