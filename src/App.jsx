import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBySection from './components/TrustedBySection';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';

const App = () => {

  //Checks if the theme has an assigned value in the localStorage. If not, it is initialized 'light' mode.
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBySection />
      <Services />
      <OurWork />
      <Teams />
    </div>
  )
}

export default App;
