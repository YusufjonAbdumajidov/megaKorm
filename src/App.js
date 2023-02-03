import React from 'react';
import Landing from "./components/Landing";
import Products from './components/Products';
import About from './components/About';
import Calculator from './components/Calculator';
import AboutCompany from './components/AboutCompany';

function App() {
  return (
    <div className="App">
      <Landing />
      <Products />
      <About />
      <Calculator />
      <AboutCompany />
    </div>
  );
}

export default App;
