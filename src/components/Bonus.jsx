import React, { Component } from 'react';
import dog from '../logos/dog.png'
import dogAndI from '../logos/dogAndI.png'

class Bonus extends Component {
  render() {
    return (
        <div className='bonus'>
            <h3>BONUS</h3>
                <p>You made it this far so you get to see my dog, Quinn</p>
            <div className='dog'>
                <img src={dog} alt='my dog' />
                <img src={dogAndI} alt='me and my dog'/>
            </div>
        </div>
    );
  }
}

export default Bonus;