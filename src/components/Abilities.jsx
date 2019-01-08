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
import express from '../logos/Express.png'
import rails from '../logos/rails.png'
import ruby from '../logos/ruby.png'
import aws from '../logos/aws.png'
import golang from '../logos/golang.png'

class Abilities extends Component {
  render() {
    return (
        <div className='abilities'>
            <h2>I know some stuff</h2>
            <div className='abilitiesList'>
                <div className='skillContainer'>
                    <img className='skill' src={js} alt='logo'/>
                    <p className='skillTyped' >JavaScript</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={css} alt='logo'/>
                    <p className='skillTyped' >CSS</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={html} alt='logo'/>
                    <p className='skillTyped' >HTML5</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={react} alt='logo'/>
                    <p className='skillTyped' >React.js</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={redux} alt='logo'/>
                    <p className='skillTyped' >Redux</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={angular} alt='logo'/>
                    <p className='skillTyped' >Angular 6</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={knex} alt='logo'/>
                    <p className='skillTyped' >Knex.js</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={node} alt='logo'/>
                    <p className='skillTyped' >Node.js</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={postgresql} alt='logo'/>
                    <p className='skillTyped' >PostgreSQL</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill rails' src={rails} alt='logo'/>
                    <p className='skillTyped' >Ruby on Rails</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={stripe} alt='logo'/>
                    <p className='skillTyped' >Stripe</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={cypress} alt='logo'/>
                    <p className='skillTyped' >Cypress</p>
                </div>
            </div>
            <h2>I'm learning some stuff</h2>
            <div className='abilitiesList'>
                <div className='skillContainer'>
                    <img className='skill' src={golang} alt='logo'/>
                    <p className='skillTyped' >Go</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={ruby} alt='logo'/>
                    <p className='skillTyped' >Ruby</p>
                </div>
                <div className='skillContainer'>
                    <img className='skill' src={aws} alt='logo'/>
                    <p className='skillTyped' >AWS</p>
                </div>
            </div>
        </div>

    );
  }
}

export default Abilities;