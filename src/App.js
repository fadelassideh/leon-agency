import './App.css';
import Cover from './components/cover/Cover';
import Features from './components/features/Features';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import About from './components/about/About';
import ContactUs from './components/contactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
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
