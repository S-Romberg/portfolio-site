import React, { Component } from 'react';
import video from '../personal-site.mp4'
import arrow from '../logos/arrow.png'

class Header extends Component {
  render() {
    return (
        <header className="App-header">
  
            <video className="landing-viewport__video"  playsInline autoPlay loop muted>
                <source className='video' src={video} type="video/mp4" />
            </video>
            <div className="name">
                <h1 className='spence'>Spencer Romberg</h1>
                <div>
                    <a href='/#description'><img className='arrow'  src={arrow} alt='arrow' /></a>
                </div>
            </div>
        </header>
    );
  }
}

export default Header;