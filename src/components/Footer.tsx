import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    
    const today = new Date;
    
    return (
        <footer className=''>
            <div className='px-36 py-12 text-sm text-gray-600'>
                    <a href="https://www.facebook.com"><FontAwesomeIcon className='mr-5 fa-2x hover:text-white' icon={faFacebookSquare}/></a>
                    <a href="https://www.instagram.com"><FontAwesomeIcon className='mr-5 fa-2x hover:text-white' icon={faInstagram}/></a>
                    <a href="https://www.twittwer.com"><FontAwesomeIcon className='mr-5 fa-2x hover:text-white' icon={faTwitter}/></a>
                    <a href="https://www.youtube.com"><FontAwesomeIcon className='fa-2x hover:text-white' icon={faYoutube}/></a>
                <div className='grid grid-cols-4 gap-2 my-8'>                  
                    <h6 className='hover:text-white'>Idiomas e legendas</h6>
                    <h6 className='hover:text-white'>Imprensa</h6>
                    <h6 className='hover:text-white'>Privacidade</h6>
                    <h6 className='hover:text-white'>Entre em contato</h6>
                    <h6 className='hover:text-white'>Audiodescrição</h6>
                    <h6 className='hover:text-white'>Relação com investidores</h6>
                    <h6 className='hover:text-white'>Avisos legais</h6>
                    <h6 className='hover:text-white'>Central de ajuda</h6>
                    <h6 className='hover:text-white'>Carreiras</h6>
                    <h6 className='hover:text-white'>Preferência de cookies</h6>
                    <h6 className='hover:text-white'>Cartão pré-pago</h6>
                    <h6 className='hover:text-white'>Termos de uso</h6>
                    <h6 className='hover:text-white'>Informações corporativas</h6>
                </div>
                <span>@ 1997-{today.getFullYear()} Imagiflix Inc.</span>
            </div>
        </footer>
    );
};

export default Footer;