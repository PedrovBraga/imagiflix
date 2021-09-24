import React, { useEffect, useState } from 'react';
import emitter from './utils/eventEmitter';

import CONST from './data/constants';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Modal from './components/Modal';

export enum TitleType {
  Movie = 'movie',
  Serie = 'tv'
};

export interface Title {
  type: TitleType;
  id: number | string;
};

function App() {

  const [ movies, setMovies ] = useState<any>();
  const [ series, setSeries ] = useState<any>();
  const [ title, setTitle ] = useState<any>();
  const [ loading, setLoading ] = useState<any>(true);

  const getFeaturedMovie = () => movies && movies?.results[0];

  const getMovieList = () => {
    if (movies) {
      const [ featured, ...movieList ] = movies?.results;
      return movieList;
    }
    return [];
  }

  const getTitle = async ({ type, id }: Title) => { //sempre que usa async precisa usar await para dizer O QUE precisa esperar 
      setLoading(true);
      const title = await fetch(`${CONST.URL}/${type}/${id}${CONST.APISTRING}`);
      const titleData = await title.json();
      setTitle(titleData);
      setLoading(false);
  };

  useEffect(() => {
    
    emitter.addListener(CONST.EVENTS.PosterClick, getTitle);
    emitter.addListener(CONST.EVENTS.ModalClose, setTitle);
    
    const fetchData = async () => { //sempre que usa async precisa usar await para dizer O QUE precisa esperar
      
      const movies = await fetch(`${CONST.URL}/discover/movie${CONST.APISTRING}&sort_by=popularity.desc`);
      const moviesData = await movies.json();
      setMovies(moviesData)
      
      const series = await fetch(`${CONST.URL}/discover/tv${CONST.APISTRING}&sort_by=popularity.desc`);
      const seriesData = await series.json();
      setSeries(seriesData);

      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {title && console.log(title)}, [ title ]);

  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      {loading && (
        <>
          <Loading />
          <NavBar />
        </>
      )}
      {!loading && (
        <>
          <Hero { ...getFeaturedMovie()} />
          <NavBar />
          <Carousel title="Filmes Populares" data={getMovieList()} />
          <Carousel title="Séries Populares" data={series?.results}/>
          <Footer/>
          {!loading && title && <Modal {...title}/>}
        </>
      )}
    </div>
  );
}

export default App;
