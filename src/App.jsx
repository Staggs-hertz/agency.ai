import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBySection from './components/TrustedBySection';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import { Toaster } from 'react-hot-toast';
//react-hot-toast is a library for showing quick, nice-looking popup notifications called toasts.

const App = () => {

  //Checks if the theme has an assigned value in the localStorage. If not, it is initialized 'light' mode.
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <div className='dark:bg-black relative'>

      <Toaster />
      {/* This is a component of the react-hot-toast library that displays and manages all active toasts(notifications) */}
      
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBySection />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
    </div>
  )
}

export default App;
