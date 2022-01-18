import React from 'react';
import './Button.scss'

function Button({action}) {
    const handleLaunch = () => {}
    return (
        <button type="submit" onClick={handleLaunch}>{action}</button>
    )
}

export default Button;
