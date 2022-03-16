import { useRef, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Header from './templates/header';
import Home from './components/home';
import SplashScreen from './components/splashScreen';
import Footer from './templates/footer';

function App() {
  const [display, setDisplay] = useState("none")
  const aboutMeScroll = useRef(null)
  const skillsScroll = useRef(null)
  const projectsScroll = useRef(null)
  const contactMeScroll = useRef(null)

  setTimeout(() => {
    setDisplay(() => "block")
  }, 3100)

  return (
    <BrowserRouter>
      <SplashScreen />

      <header style={{ transition: "1s", display: display,  }}>
        <Header
          refAboutMe={aboutMeScroll}
          refSkills={skillsScroll}
          refProjects={projectsScroll}
          refContactMe={contactMeScroll}
        />
      </header>

        <Home
          style={{ transition: "1s", display: display }}
          refAboutMe={aboutMeScroll}
          refSkills={skillsScroll}
          refProjects={projectsScroll}
          refContactMe={contactMeScroll}
        />

      <footer style={{ transition: "1s", display: display }}>
        <Footer />
      </footer>

    </BrowserRouter>
  );
}

export default App;
