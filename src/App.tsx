import { useRef } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Header from './templates/header';
import Home from './components/home';
import SplashScreen from './components/splashScreen';

function App() {
  const aboutMeScroll = useRef(null)
  const skillsScroll = useRef(null)
  const projectsScroll = useRef(null)
  return (
    <BrowserRouter>
      <SplashScreen/>

      <Header 
        refAboutMe={aboutMeScroll}
        refSkills={skillsScroll}
        refProjects={projectsScroll}
      />
      
      <Home 
        refAboutMe={aboutMeScroll} 
        refSkills={skillsScroll}
        refProjects={projectsScroll}
      />

    </BrowserRouter>
  );
}

export default App;
