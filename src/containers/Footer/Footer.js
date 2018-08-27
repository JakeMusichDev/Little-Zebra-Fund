import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'
import { colors } from '../../utils/styles'
import Logo from '../../components/Logo/Logo'
import LinkGroup from '../../components/LinkGroup/LinkGroup'

const menuItems = ['what we do', 'get involved', 'shop', 'news']
const items = ['f', 'f']
export default class Footer extends Component {
  render () {
    return (
      <div className={css(styles.footerContainer)}>
        <Logo light={true} />
        <LinkGroup links={menuItems} vertical={true} type={'text'} />
        <LinkGroup links={menuItems} vertical={true} type={'text'} />
        <LinkGroup links={items} vertical={false} type={'text'} />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    padding: '20px 0px',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    background: `${colors.grey}`,
    color: `white`
  }
})