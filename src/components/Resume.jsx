import React, { Component } from 'react'

import resume from '../resume.png'

class Resume extends Component {
    render(){
        return (
            <img className='resume' src={resume}/>
        )
    }
}

export default Resume