import React, { Component } from 'react';

import leopardImage from '../../assets/leopard-image.png'

import { copy } from '../../utils/copy'
import { colors } from '../../utils/styles'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Section from '../Section/Section'
import Widget from '../Widget/Widget'
import SectionContent from '../../components/SectionContent/SectionContent'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Section copy={copy.donationSection} bgColor={colors.offWhite}>
            <Widget />
          </Section>
          <Section copy={copy.infoSection} bgColor={colors.white} >
            <SectionContent 
              copy={copy.infoSection.content} 
              image={leopardImage} 
            />
          </Section>
        <Footer />
      </div>
    );
  }
}
