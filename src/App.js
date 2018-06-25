import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Body from './components/Body'
import Abilities from './components/Abilities'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Bonus from './components/Bonus'

class App extends Component {
  constructor(props){
    super(props)
    this.state={    
        render: false,
    }
  }

  bonus = (event) => {
    console.log('bonus')
    this.setState({render: !this.state.render})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Abilities />
        <Projects />
        <Contact bonus={this.bonus} />
        {this.state.render && 
        <Bonus />}
      </div>
    );
  }
}

export default App;
