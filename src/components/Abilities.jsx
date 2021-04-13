import React, { Component } from 'react';

import discrete from '../logos/discrete-math.png'
import docker from '../logos/docker.png'
import node from '../logos/node.png'
import postgresql from '../logos/postgresql.png'
import react from '../logos/react.png'
import java from '../logos/java.png'
import angular from '../logos/angular.png'
import rails from '../logos/rails.png'
import ruby from '../logos/ruby.png'
import cloud from '../logos/cloud.png'

class Abilities extends Component {
  render() {
    return (
        <div className='abilities'>
            <h2>Skills</h2>
            <div className='abilitiesList'>
                <div className='skillContainer'>
                    <img className='skill' src={react} alt='React.js logo'/>
                    <p className='skillTyped' >React.js</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={angular} alt='Angular logo'/>
                    <p className='skillTyped' >Angular</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={node} alt='Node.js logo'/>
                    <p className='skillTyped' >Node.js</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={postgresql} alt='PSQL logo'/>
                    <p className='skillTyped' >PostgreSQL</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill rails' src={rails} alt='Ruby on Rails logo'/>
                    <p className='skillTyped' >Ruby on Rails</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={ruby} alt='Ruby logo'/>
                    <p className='skillTyped' >Ruby</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={docker} alt='Docker logo'/>
                    <p className='skillTyped' >Docker</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={cloud} alt='cloud logo'/>
                    <p className='skillTyped' >AWS/GCP/Azure</p>
                </div>
            </div>
            <h2>Skills In Progress</h2>
            <div className='abilitiesList'>
                <div className='skillContainer'>
                    <img className='skill' src={discrete} alt='discrete math symbol'/>
                    <p className='skillTyped' >Discrete Math</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={java} alt='java logo'/>
                    <p className='skillTyped' >Java</p>
                </div>
            </div>
        </div>

    );
  }
}

export default Abilities;
