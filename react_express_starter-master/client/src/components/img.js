import React from 'react';
import './img.css';

const Img = ({src}) => {
    return <img src={src} alt = 'slide-img' className="imgStyles"></img> 
}

export default Img;