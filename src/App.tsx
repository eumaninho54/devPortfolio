import { useRef, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Header from './templates/header';
import Home from './components/home';
import SplashScreen from './components/splashScreen';

function App() {
  const [display, setDisplay] = useState("none")
  const aboutMeScroll = useRef(null)
  const skillsScroll = useRef(null)
  const projectsScroll = useRef(null)


  setTimeout(() => {
    setDisplay( () => "initial")
  }, 3100)

  return (
    <BrowserRouter>
      <SplashScreen />

      <header style={{transition: "1s", display: display}}>
        <Header
          refAboutMe={aboutMeScroll}
          refSkills={skillsScroll}
          refProjects={projectsScroll}
        />
      </header>

      <main style={{transition: "1s", display: display}}>
        <Home
          refAboutMe={aboutMeScroll}
          refSkills={skillsScroll}
          refProjects={projectsScroll}
        />
      </main>

    </BrowserRouter>
  );
}

export default App;
