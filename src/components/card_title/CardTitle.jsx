import React from 'react';
import './CardTitle.scss'

function CardTitle({title, subtitle}) {
    return (
        <div className='card-title'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export default CardTitle;
