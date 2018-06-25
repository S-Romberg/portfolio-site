import React, { Component } from 'react';
import github from '../logos/github.png'
import gdog from '../projects/G-dawgs.png'
import inspo from '../projects/Inspogram.png'
import island from '../projects/Island2you.png'
import music from '../projects/MusicPlayland.png'

class Projects extends Component {
  show(){
    console.log('enter')
  }
  notShow(){
    console.log('leave')
  }
  render() {
    return (
      <div className='columnProjects'>
        <h2>Projects</h2>
        <div className='projects' >
          <div className='projectHold'>
            <a href='https://galvanize-dogs.firebaseapp.com/'><img className='project' src={gdog} alt='gdog' onMouseEnter={this.show} onMouseLeave={this.notShow} /></a>
            <a href='https://github.com/S-Romberg/Galvanize-Dogs'><img className='github' src={github} alt='github' /></a>
          </div>
          <div className='projectHold'>
            <a href='https://inspo-gram.firebaseapp.com' ><img className='project' src={inspo} alt='inspo' onMouseEnter={this.show} onMouseLeave={this.notShow} /></a>
            <a href='https://github.com/S-Romberg/inspogram-client'><img className='github' src={github} alt='github' /></a>
          </div>
          <div className='projectHold'>
            <a href='https://islandtoyou.firebaseapp.com' ><img className='project' src={island} alt='island' onMouseEnter={this.show} onMouseLeave={this.notShow} /></a>
            <a href='https://github.com/S-Romberg/islandLife'><img className='github' src={github} alt='github' /></a>
          </div>
          <div className='projectHold'>
            <a href='https://github.com/S-Romberg/music-playland'><img className='project' src={music} alt='music' onMouseEnter={this.show} onMouseLeave={this.notShow} /></a>
            <a href='https://github.com/S-Romberg/music-playland'><img className='github' src={github} alt='github' /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
