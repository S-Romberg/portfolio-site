import React, { Component } from 'react';
import './App.css';
import ReactModal from 'react-modal';

import Header from './components/Header'
import Body from './components/Body'
import Abilities from './components/Abilities'
import Picture from './components/Picture'
import ContactPic from './components/ContactPic'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Bonus from './components/Bonus'

class App extends Component {
  constructor(props){
    super(props)
    this.state={    
        render: false,
        modal: false
    }
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  bonus = (event) => {
    console.log('bonus')
    this.setState({render: !this.state.render})
  }

  showModal () {
    this.setState({ modal: true });
    console.log('hey')
  }
  
  closeModal () {
    if(this.state.modal){
      this.setState({ modal: false });
    }
  }

  render() {
    return (
      <div className="App" onClick={this.closeModal}>
        <Header />
        <Body />
        <Abilities />
        <Picture />
        <Projects />
        <ContactPic />
        <Contact showModal={this.showModal} bonus={this.bonus} />
        <ReactModal isOpen={this.state.modal}>
          <Resume />
        </ReactModal>
        {this.state.render && 
        <Bonus />}
      </div>
    );
  }
}

export default App;
