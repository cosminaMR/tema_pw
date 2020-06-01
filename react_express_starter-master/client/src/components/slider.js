import React, {useState} from 'react';
import './slider.css';
import Img from './img';


import i2 from '../images/am18.jpg';
import i4 from '../images/am19.jpg';
import i5 from '../images/am15.jpg';
import i6 from '../images/am14.jpg';
import i7 from '../images/am11.jpg';
import i8 from '../images/am12.jpg';
import i10 from '../images/rsz_1am7.jpg';

const Slider = () => {
let sliderArr = [<Img src={i8} />,<Img src={i2} />,<Img src={i4} />, <Img src={i6} />, <Img src={i5}/>,<Img src={i7} />,<Img src={i10} />];
    const [x,setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100*(sliderArr.length-1)):setX(x+100);
    };
    const goRight = () => {
        x === -100*(sliderArr.length-1)?setX(0):setX(x-100);
    };
    return (
    <div className="slider">
    {
        sliderArr.map((item,index)=> {
            return (  
                <div key={index} className = "slide" style={{transform:`translateX(${x}%)`}}>
                    {item}
                </div>            
            );
        })
    } 
    <button id = "goLeft" onClick={goLeft}><i className = "fas fa-chevron-left"></i></button>
    <button id = "goRight" onClick={goRight}><i className = "fas fa-chevron-right"></i></button>  
    </div>
    );
}

export default Slider;