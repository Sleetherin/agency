import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import HomePage from './pages/HomePage';
import CaseFilesPage from './pages/CaseFilesPage';
import DetectiveProfilesPage from './pages/DetectiveProfilesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import BookingSystemPage from './pages/BookingSystemPage';

// Styles
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-files" element={<CaseFilesPage />} />
        <Route path="/detective-profiles" element={<DetectiveProfilesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/booking-system" element={<BookingSystemPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
