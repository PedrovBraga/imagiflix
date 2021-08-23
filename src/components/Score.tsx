import React from 'react';

import './score.css';

const Score = ({ value = 5 }:{value?: string | number}) => {

    const getBorderColor = () => {
        if (value >= 7){
            return 'border-green-400';
        } else 
            if (value < 7 && value > 4){ 
                return 'border-yellow-400';
            } else
                return 'border-red-400';
    };

    return (
        <span className={`text-center score inline-block mx-2 py-2 px-3 border-4 bg-black bg-opacity-75 rounded-full ${getBorderColor()}`}>
            {value}
        </span>
        
        
        );
};

export default Score;