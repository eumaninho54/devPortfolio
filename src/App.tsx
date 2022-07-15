import { useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import { RefProvider } from './context/refContext';
import { themeUi } from './config/themes';
import { ThemeProvider } from '@mui/material';
import Aos from 'aos';

function App() {

  useEffect(() => {
    Aos.init()
  },[])

  return (
    <ThemeProvider theme={themeUi}>
      <RefProvider>
        <BrowserRouter>
          <Header />

          <Home />

          <Footer />
        </BrowserRouter>
      </RefProvider>
    </ThemeProvider>
  );
}

export default App;
