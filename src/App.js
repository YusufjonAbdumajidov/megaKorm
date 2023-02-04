import React from 'react';
import Landing from "./components/Landing";
import Products from './components/Products';
import About from './components/About';
import Calculator from './components/Calculator';
import AboutCompany from './components/AboutCompany';
import Map from './components/Map';
import Materials from './components/Materials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Landing />
      <Products />
      <About />
      <Calculator />
      <AboutCompany />
      <Map />
      <Materials />
      <Footer />
    </div>
  );
}

export default App;
