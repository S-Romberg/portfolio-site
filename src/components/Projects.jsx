import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import github from '../logos/github.png'
import safety from '../projects/safetynet.png'
import equifax from '../projects/equifax.png'

AOS.init();
class Projects extends Component {
  render() {
    return (
      <div className='columnProjects'>
        <h2>A couple things that I've worked on</h2>
        <div className='projects' >
        <div className='projectHold'>
          <div  id='outer-box'>
            <a href='https://github.com/S-Romberg/SafetyNet' target="_blank" rel="noopener noreferrer">
              <img  className='project' src={safety} alt='SafetyNet' />
              <div id='inner-box'>
                <ul>
                  <p>
                    <i class="fas fa-link"></i>
                    My first passion project

                  </p>
                  <li>React Native</li>
                  <li>JavaScript</li>
                  <li>Node.js</li>
                  <li>Knex.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </a>
          </div>
          </div>
        <div className='projectHold'>
          <div id='outer-box'>
            <a href='https://www.brewerdigital.com/case-study/4' target="_blank" rel="noopener noreferrer">
              <img  className='project' src={equifax} alt='Equifax' />
              <div id='inner-box'>
                  <ul>
                    <p>
                    <i class="fas fa-link"></i>
                    Containerized 21 independent Rails applications to the hardened specifications of the Equifax standard
                  </p>
                  <li>Ruby on Rails</li>
                  <li>Docker</li>
                  <li>Google Cloud</li>
                  <li>Jenkins</li>
                </ul>
              </div>
            </a>
          </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Projects;
