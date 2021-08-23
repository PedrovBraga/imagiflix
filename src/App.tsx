import React, { useEffect, useState } from 'react';

import CONST from './data/constants';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';



function App() {

  const [ movies, setMovies ] = useState<any>();

  useEffect(() => {
    const fetchData = async () => { //sempre que usa async precisa usar await para dizer O QUE precisa esperar
      
      const response = await fetch(`${CONST.URL}/discover/movie${CONST.APISTRING}&sort_by=popularity.desc`);
      const data = await response.json();

      setMovies(data)
    };

    fetchData();
  }, []);

  useEffect(() => {movies && console.log(movies)}, [ movies ]);

  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      <Hero { ...movies?.results[1]} />
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}

export default App;
