import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header'; // Make sure the path is correct
import Footer from './components/Footer'; 

import Home from './pages/HomePage';
import CaseFiles from './pages/CaseFilesPage';
import DetectiveProfiles from './pages/DetectiveProfilesPage';
import Testimonials from './pages/TestimonialsPage';
import Blog from './pages/BlogPage';
import BookingSystem from './pages/BookingSystemPage';

import './App.css'

function App() {

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/case-files" component={CaseFiles}/>
        <Route path="/detective-profiles" component={DetectiveProfiles}/>
        <Route path="/testimonials" component={Testimonials}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/booking-system" component={BookingSystem}/>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App
