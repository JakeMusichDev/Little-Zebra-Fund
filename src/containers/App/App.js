import React, { Component } from 'react';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Section from '../Section/Section'
import Widget from '../Widget/Widget'
import SectionContent from '../../components/SectionContent/SectionContent'

import leopardImage from '../../assets/leopard-image.png'

import { copy } from '../../utils/copy'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
          <Section copy={copy.donationSection} >
            <Widget />
          </Section>
          <Section copy={copy.infoSection} >
            <SectionContent copy={copy.infoSection.content} image={leopardImage} />
          </Section>
        <Footer />
      </div>
    );
  }
}
