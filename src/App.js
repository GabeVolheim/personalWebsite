// src/App.js
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import wip from './components/wipPage';
import HomePage from './components/HomePage';
import Header from './components/Header';



  
const App = () => {
  return (
    <Router>
    <Header />
      {/* <Footer /> */}
      <Routes>
        <Route path="/" element = {HomePage}/>
        <Route path="/blog" element={wip}/>
      </Routes>
    </Router>
  );
};

export default App;
