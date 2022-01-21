import React from 'react';
import './Title.scss'

function Title({text, subtext}) {
    return (
        <div className='title'>
            <h1>{text}</h1>
            <p>{subtext}</p>
        </div>
    )
}

export default Title;
