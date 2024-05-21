// src/App.js
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import wip from './components/wipPage';
import HomePage from './components/HomePage';



  
const App = () => {
  return (
    <Router>
      {/* <Footer /> */}
      <Routes>
        <Route path="/" element = {HomePage}/>
        <Route path="/blog" element={wip}/>
      </Routes>
    </Router>
  );
};

export default App;
