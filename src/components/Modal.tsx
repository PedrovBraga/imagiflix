import React from 'react';
import emitter from '../utils/eventEmitter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import CONST from '../data/constants';
import Score from './Score';

const Modal = ({ poster_path, title, original_title, name, original_name, overview, vote_average, runtime, number_of_seasons }: any) => {
    
    const { IMAGEURL } = CONST;

    const handleClick = () => {
        emitter.emit(CONST.EVENTS.ModalClose);
    };
    
    return (
        <div className='fixed top-0 left-0 z-10 p-12 w-full h-screen grid place-items-center'>
            <article className='w-full h-4/5 grid grid-flow-col p-8 gap-4 bg-black shadow-lg box-content'>
                <img className='h-5/6' src={`${IMAGEURL}/w400/${poster_path}`} alt={title ? title : name}/>
                <div className='relative'>
                    <FontAwesomeIcon className='cursor-pointer absolute top-0 right-0' icon={faTimesCircle} size='2x' onClick={handleClick}/>
                    <h2 className='text-3xl font-bold'>{title ? title : name}</h2>
                    <h6>{original_title ? original_title : original_name}</h6>
                    <p className='my-8'>{overview}</p>
                    <Score value={vote_average} />
                    <span className='bg-red-600 px-3 py-2 ml-3 rounded self-center'>{runtime ? `${runtime}min` : `${number_of_seasons} temporadas`}</span>
                </div>
            </article> 
        </div>
    );
};

export default Modal;