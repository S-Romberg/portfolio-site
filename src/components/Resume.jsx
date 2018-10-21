import React, { Component } from 'react'

import resume from '../SpencerRombergResume-1.jpg'

class Resume extends Component {
    render(){
        return (
            <img className='resume' src={resume}/>
        )
    }
}

export default Resume