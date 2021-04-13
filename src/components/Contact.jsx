import React, { Component } from 'react';


import logo from '../logos/logo-white.png'
import dog from '../quinn.png'



class Contact extends Component {

  render() {
    return (
        <div>
        <div className='contact'>
            <div className='contactHold' >
            <img className='logo' src={logo} alt='logo'/>
            <div className='contactInfo'>
                <div>
                    <i className="fas fa-phone-square"></i>
                    <p>720-215-1324</p>
                </div>
                <div>
                    <i className="fas fa-envelope"></i>
                    <p>spencer.romberg@gmail.com</p>
                </div>
                <div >
                    <a href='https://github.com/S-Romberg' target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i>
                    <p>github.com/s-romberg</p></a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/spencer-romberg/' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>
                    <p>linkedin.com/in/spencer-romberg</p></a>
                </div>
                <div>
                  <i className="far fa-file-pdf"></i>
                  <a href='https://drive.google.com/file/d/1JYea4Qe5sdc9MW0OkU-mvAdV3rJxl-fq/view?usp=sharing' target="_blank" rel="noopener noreferrer"><p>resume</p></a>
                </div>
            </div>
            </div>
        </div>
        <div className='createdBy'><p>Created by Spencer Romberg 2018</p></div>
        <div className='mobileBonus'><p>You're on mobile, so you get a picture of my dog! Congrats</p><img alt='quinn!' src={dog} /></div>
        </div>
    );
  }
}

export default Contact;
