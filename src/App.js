import { useState } from 'react'
import './App.css';
import Cover from './components/cover/Cover';
import Features from './components/features/Features';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import About from './components/about/About';
import ContactUs from './components/contactUs/ContactUs';
import { DarkModeContext } from './helper/DarkModeContext';

function App() {
  const [mode, setMode] = useState("light")
  return (
    <div className="App">
      <DarkModeContext.Provider value={{mode, setMode}}>
        <Header />
      </DarkModeContext.Provider>
      <Cover />
      <Features />
      <Services />
      <Portfolio />
      <About />
      <ContactUs/>
      <footer> &copy; 2022 <span>Leon</span> ALL Right Reserved</footer>
    </div>
  );
}

export default App;
