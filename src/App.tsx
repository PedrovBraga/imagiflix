import React from 'react';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      <Hero/>
      <NavBar/>
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}

export default App;
