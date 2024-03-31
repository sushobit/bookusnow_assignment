import React from 'react';
import banner from './Banner.svg'
import './index.css'; 

function Hero() {
    return (
        <div className="hero-container"> 
            
            <div>
                <img className="hero-image" src={banner} alt="Banner" />
            </div>

            <div className="hero-heading">
                <div className="heading-text">
                    Discover Exciting Events Happening Near You - Stay Tuned For Updates!
                </div>
                <div className="sub-heading">
                    sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id
                </div>
            </div>
        </div>
    );
}

export default Hero;
