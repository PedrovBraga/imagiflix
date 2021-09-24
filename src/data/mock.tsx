import cover1 from '../assets/movie1.jpg';
import cover2 from '../assets/movie2.jpg';
import cover3 from '../assets/movie3.jpg';

export interface Movie {
    title?: string;
    name?: string;
    cover?: string;
    poster_path: string;
    vote_average?: number | string;
    id?: number | string;
}

const mockData: Movie[] = [

    {
        title: 'Avengers',
        poster_path: cover1,
    },
    {
        title: 'Missão Impossível',
        poster_path: cover2,
    },
    {
        title: 'Mega Tubarão',
        poster_path: cover3,
    },
    {
        title: 'Avengers',
        poster_path: cover1,
    },
    {
        title: 'Missão Impossível',
        poster_path: cover2,
    },
    {
        title: 'Mega Tubarão',
        poster_path: cover3,
    },
    {
        title: 'Avengers',
        poster_path: cover1,
    },
    {
        title: 'Missão Impossível',
        poster_path: cover2,
    },
    {
        title: 'Mega Tubarão',
        poster_path: cover3,
    },
    {
        title: 'Avengers',
        poster_path: cover1,
    },
    {
        title: 'Missão Impossível',
        poster_path: cover2,
    },
    {
        title: 'Mega Tubarão',
        poster_path: cover3,
    },
    {
        title: 'Avengers',
        poster_path: cover1,
    },
    {
        title: 'Missão Impossível',
        poster_path: cover2,
    },
    {
        title: 'Mega Tubarão',
        poster_path: cover3,
    },
    {
        title: 'Avengers',
        poster_path: cover1,
    },
    {
        title: 'Missão Impossível',
        poster_path: cover2,
    },
    {
        title: 'Mega Tubarão',
        poster_path: cover3,
    }

];

export default mockData;