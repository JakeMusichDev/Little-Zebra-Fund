import React, { Component } from 'react';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Section from '../Section/Section'
import { copy } from '../../utils/copy'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Section copy={copy.donationSection} >
            
          </Section>
          <Section copy={copy.infoSection} >
        
          </Section>
        <Footer />
      </div>
    );
  }
}
