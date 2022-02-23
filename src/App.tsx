import React, { createRef, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Header from './templates/header';
import Home from './views/home';
import SplashScreen from './views/splashScreen';

function App() {

  return (
    <BrowserRouter>
      <SplashScreen/>

      <Header />

      <Home />




    </BrowserRouter>
  );
}

export default App;
