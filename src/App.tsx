import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Header from './templates/header';
import Home from './components/home';
import SplashScreen from './components/splashScreen';

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
