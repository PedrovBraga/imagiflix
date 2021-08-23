import React from 'react';

import CONST from '../data/constants';

import placeholder from '../assets/hero.jpg';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Score from './Score';

const Hero = ({ backdrop_path = null, title = 'Avengers Endgame', vote_average = 10}) => {

    const { IMAGEURL } = CONST;

    return (
        <header className='box-border relative min-h-screen -mb-56'>
            <img className='object-cover object-center h-auto w-full' src={backdrop_path ? `${IMAGEURL}/original/${backdrop_path}` : placeholder} alt='Filme em destaque'/>
            <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black'></div>
            <article className='absolute bottom-0 mb-64 px-8'>
                <p className='text-3xl'>Assista agora:</p>
                <h2 className='text-6xl font-bold'>{title}</h2>
                <p className='text-base my-4'>
                    Nota
                    <Score value={vote_average} />
                </p>
                <button className='text-base mr-4 py-2 px-10 rounded bg-black bg-opacity-50 transition-all duration-200 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75'>
                    <FontAwesomeIcon icon={faPlay} className='mr-2'/> Assistir
                </button>
                <button className='text-base mr-4 py-2 px-10 rounded bg-black bg-opacity-50 transition-all duration-200 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75'>
                    <FontAwesomeIcon icon={faPlus} className='mr-2'/> Minha Lista
                </button>
            </article>
        </header>
    );
};

export default Hero;