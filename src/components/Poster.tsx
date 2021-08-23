import React from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Score from './Score';


import { Movie } from '../data/mock';

import './Poster.css';

const Poster = ({ poster_path: cover, title, vote_average: score }: Movie, index: number) => (
    <article className='relative transition-all duration-500 ease-in-out transform hover:scale-110' key={index}>
        <img src={cover} alt={title}/>
        <div className='poster cursor-pointer absolute inset-0 w-full h-full px-3 py-8 grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0 text-center'>
            <FontAwesomeIcon icon={faPlayCircle} size='4x'/>
            <h2 className='text-2xl'>{title}</h2>
            <Score value={score} />
        </div>
    </article>
);

export default Poster;