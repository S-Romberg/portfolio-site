import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import github from '../logos/github.png'
import gdog from '../projects/G-dawgs.png'
import inspo from '../projects/Inspogram.png'
import island from '../projects/Island2you.png'
import music from '../projects/MusicPlayland.png'
import voter from '../projects/Voter.png'
import safety from '../projects/safetynet.png'

AOS.init();
class Projects extends Component {
  render() {
    return (
      <div className='columnProjects'>
        <h2>Projects</h2>
        <div className='projects' >
        <div className='projectHold'>
          <div data-aos-easing="ease-in-sine" data-aos="fade-up"  id='outer-box'>
            <a href='https://github.com/S-Romberg/SafetyNet' >
              <img  className='project' src={safety} alt='SafetyNet' />
              <div id='inner-box'>
                  <ul>
                  <li>React Native</li>
                  <li>JavaScript</li>
                  <li>ChatKit</li>
                  <li>Node.js</li>
                  <li>Knex.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>CSS</li>
                </ul>
              </div>
            </a>
          </div>
            <a href='https://github.com/S-Romberg/SafetyNet'>
              <img className='github' src={github} alt='github' />
            </a>
          </div>
        <div className='projectHold'>
          <div data-aos-easing="ease-in-sine" data-aos="fade-up"  id='outer-box'>
            <a href='https://inspo-gram.firebaseapp.com' >
              <img className='project' src={inspo} alt='inspo' />
              <div id='inner-box'>
                  <ul>
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>Knex.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>CSS</li>
                </ul>
              </div>
            </a>
          </div>
            <a href='https://github.com/S-Romberg/inspogram-client'>
              <img className='github' src={github} alt='github' />
            </a>
          </div>
          <div data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-anchor-placement="center-center" className='projectHold'>
          <div id='outer-box'>
            <a href='https://galvanize-dogs.firebaseapp.com/'>
              <img className='project' src={gdog} alt='gdog' />
              <div id='inner-box'>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>Knex.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>CSS</li>
                </ul>
              </div>
            </a>
          </div>
            <a href='https://github.com/S-Romberg/Galvanize-Dogs'>
              <img className='github' src={github} alt='github' />
            </a>
          </div>
          <div data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-anchor-placement="center-center" className='projectHold'>
          <div id='outer-box'>
            <a href='https://voterappr.firebaseapp.com/'>
              <img className='project' src={voter} alt='music' />
              <div id='inner-box'>
                  <ul>
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>Knex.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>CSS</li>
                  <li>Auth</li>
                </ul>
              </div>
            </a>
          </div>
            <a href='https://github.com/S-Romberg/voter'>
              <img className='github' src={github} alt='github' />
            </a>
          </div>
          <div data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-anchor-placement="center-top" className='projectHold'>
          <div id='outer-box'>
            <a href='https://islandtoyou.firebaseapp.com' >
              <img className='project' src={island} alt='island' />
              <div id='inner-box'>
                  <ul>
                  <li>JavaScript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </a>
          </div>
            <a href='https://github.com/S-Romberg/islandLife'>
              <img className='github' src={github} alt='github' />
            </a>
          </div>
          <div data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-anchor-placement="center-top" className='projectHold'>
          <div id='outer-box'>
            <a href='https://github.com/S-Romberg/music-playland'>
              <img className='project' src={music} alt='music' />
              <div id='inner-box'>

                <ul>
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </a>
          </div>
            <a href='https://github.com/S-Romberg/music-playland'>
              <img className='github' src={github} alt='github' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
