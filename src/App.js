import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Skills />
          </>
        } />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      <Footer />
    </Router>
  
  );
}

export default App;
