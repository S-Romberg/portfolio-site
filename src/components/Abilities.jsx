import React, { Component } from 'react';

import js from '../logos/js.png'
import css from '../logos/css.png'
import html from '../logos/html.png'
import cypress from '../logos/cypress.png'
import node from '../logos/node.png'
import postgresql from '../logos/postgresql.png'
import react from '../logos/react.png'
import redux from '../logos/redux.png'
import angular from '../logos/angular.png'
import stripe from '../logos/stripe.png'
import knex from '../logos/knex.png'

class Abilities extends Component {
  render() {
    return (
        <div className='abilities'>
            <h2>I know some stuff</h2>
            <div className='abilitiesList'>
                <div>
                    <img className='skill' src={js} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={css} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={html} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={react} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={redux} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={angular} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={node} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={postgresql} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={knex} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={stripe} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={cypress} alt='logo'/>
                </div>
            </div>
        </div>

    );
  }
}

export default Abilities;