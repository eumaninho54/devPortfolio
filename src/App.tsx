import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Header from './templates/header';
import Home from './components/home';
import SplashScreen from './components/splashScreen';
import {  useRef } from 'react';

function App() {
  const aboutMeScroll = useRef(null)

  return (
    <BrowserRouter>
      <SplashScreen/>

      <Header refAboutMe={aboutMeScroll}/>
      
      <Home refAboutMe={aboutMeScroll} />

    </BrowserRouter>
  );
}

export default App;
