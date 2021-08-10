import React from 'react';
import placeholder from '../assets/hero.jpg';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = ({ title = 'Avengers Endgame', score = 9}) => {

    const getBorderColor = () => {
        if (score >= 7){
            return 'border-green-400';
        } else 
            if (score < 7 && score > 4){ 
                return 'border-yellow-400';
            } else
                return 'border-red-400';
    };

    return (
        <header className='relative min-h-screen'>
            <img className='object-cover object-center h-full w-full' src={placeholder} alt='Filme em destaque'/>
            <article className='absolute bottom-0 mb-64 px-8'>
                <p className='text-3xl'>Assista agora:</p>
                <h2 className='text-6xl font-bold'>{title}</h2>
                <p className='text-base my-4'>
                    Nota<span className={`inline-block mx-2 py-1 px-3 border-4 bg-black bg-opacity-75 rounded-full ${getBorderColor()}`}>{score}</span>
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