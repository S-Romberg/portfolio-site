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
import todo from '../projects/todo.png'

AOS.init();
class Projects extends Component {
  render() {
    return (
      <div className='columnProjects'>
        <h2>Projects</h2>
        <div className='projects' >
        <div className='projectHold'>
          <div  id='outer-box'>
            <a href='https://github.com/S-Romberg/SafetyNet' target="_blank" rel="noopener noreferrer">
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
            <a href='https://github.com/S-Romberg/SafetyNet' target="_blank" rel="noopener noreferrer">
              <img className='github' src={github} alt='github' />
            </a>
          </div>
        <div className='projectHold'>
          <div id='outer-box'>
            <a href='https://inspo-gram.firebaseapp.com' target="_blank" rel="noopener noreferrer" >
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
            <a href='https://github.com/S-Romberg/inspogram-client' target="_blank" rel="noopener noreferrer">
              <img className='github' src={github} alt='github' />
            </a>
          </div>
          <div className='projectHold'>
          <div id='outer-box'>
            <a href='https://galvanize-dogs.firebaseapp.com/' target="_blank" rel="noopener noreferrer">
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
            <a href='https://github.com/S-Romberg/Galvanize-Dogs' target="_blank" rel="noopener noreferrer">
              <img className='github' src={github} alt='github' />
            </a>
          </div>
          <div  className='projectHold'>
          <div id='outer-box'>
            <a href='https://s3-rails-todo.herokuapp.com/' target="_blank" rel="noopener noreferrer">
              <img className='project' src={todo} alt='todo' />
              <div id='inner-box'>

                <ul>
                  <li>Ruby on Rails</li>
                  <li>AWS - S3</li>
                  <li>SCSS</li>
                </ul>
              </div>
            </a>
          </div>
            <a href='https://github.com/S-Romberg/todo-in-ruby' target="_blank" rel="noopener noreferrer">
              <img className='github' src={github} alt='github' />
            </a>
          </div>
          <div className='projectHold'>
          <div id='outer-box'>
            <a href='https://voterappr.firebaseapp.com/' target="_blank" rel="noopener noreferrer">
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
            <a href='https://github.com/S-Romberg/voter' target="_blank" rel="noopener noreferrer">
              <img className='github' src={github} alt='github' />
            </a>
          </div>
          <div  className='projectHold'>
          <div id='outer-box'>
            <a href='https://islandtoyou.firebaseapp.com' target="_blank" rel="noopener noreferrer">
              <img className='project' src={island} alt='island' />
              <div id='inner-box'>
                  <ul>
                  <li>JavaScript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </a>
          </div>
            <a href='https://github.com/S-Romberg/islandLife' target="_blank" rel="noopener noreferrer">
              <img className='github' src={github} alt='github' />
            </a>
          </div>
          <div  className='projectHold'>
          <div id='outer-box'>
            <a href='https://github.com/S-Romberg/music-playland' target="_blank" rel="noopener noreferrer">
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
            <a href='https://github.com/S-Romberg/music-playland' target="_blank" rel="noopener noreferrer">
              <img className='github' src={github} alt='github' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
