import React, { useEffect, useState } from 'react';
import Landing from "./components/Landing";
import Products from './components/Products';
import About from './components/About';
import Calculator from './components/Calculator';
import AboutCompany from './components/AboutCompany';
import Map from './components/Map';
import Materials from './components/Materials';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  // const [ isLoading, setIsLoading ] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000)
  // }, [])

  // if(isLoading){
  //   <Loading  />
  // }else 
  return (
    <div className="App">
      {/* <Loading  /> */}
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
