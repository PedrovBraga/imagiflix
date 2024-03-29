const URL = 'https://api.themoviedb.org/3';
const IMAGEURL = 'https://image.tmdb.org/t/p';
const APIKEY = '8393542f0d97802c12d24480ce1058c4';
const APISTRING =`?api_key=${APIKEY}&language=pt-BR`;
const EVENTS = {
    PosterClick: 'PosterClick',
    ModalClose: 'ModalClose'
};

const constants = {
    URL, 
    IMAGEURL,
    APIKEY,
    APISTRING,
    EVENTS
}

export default constants;