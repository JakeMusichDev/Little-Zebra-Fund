import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'
import { colors } from '../../utils/styles'
import { footerData } from '../../utils/data'

import Logo from '../../components/Logo/Logo'
import LinkGroup from '../../components/LinkGroup/LinkGroup'


export default class Footer extends Component {
  render () {
    return (
      <div className={css(styles.footerContainer)}>
        {footerData.map( group => <LinkGroup key={group.header} header={group.header} links={group.links} vertical={group.vertical} type={group.type}/>)}
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