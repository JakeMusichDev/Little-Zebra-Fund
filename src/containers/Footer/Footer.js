import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'
import { colors } from '../../utils/styles'
import Logo from '../../components/Logo/Logo'
import LinkGroup from '../../components/LinkGroup/LinkGroup'

import twitter from '../../assets/twitter-logo.svg'
import fb from '../../assets/facebook-logo.svg'
import youtube from '../../assets/youtube-logo.svg'

const whoWeAre = ['Our history', 'Press centre', 'Contact us']
const involved = ['Join us', 'Donate', 'Careers', 'Shop']
const socials = [twitter, fb, youtube]

export default class Footer extends Component {
  render () {
    return (
      <div className={css(styles.footerContainer)}>
        <LinkGroup header={'who we are'} links={whoWeAre} vertical={true} type={'text'} />
        <LinkGroup header={'get involved'} links={involved} vertical={true} type={'text'} />
        <LinkGroup header={'follow  us'} links={socials} vertical={true} type={'image'} />
        <div className={css(styles.right)}>
          <Logo light={true} />
          <AddressBlock />
        </div>
      </div>
    )
  }
}

const AddressBlock = props => {
  return(
    <div className={css(styles.addressBlock)}>
      <div>3 Warren Rd,</div>
      <div>Mary Tavy,</div>
      <div>Tavistock PL19 9PA,</div>
      <div>United Kingdom</div>
    </div>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    padding: '50px 0px',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    background: `${colors.grey}`,
    color: `white`
  },
  addressBlock: {
    fontSize: 9,
    opacity: 0.8,
    padding: '10px',
    marginLeft: '20%'
  },
  right: {
    marginLeft: '15%'
  }
})