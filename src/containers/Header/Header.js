import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'
import { colors } from '../../utils/styles'
import { headerMenuItems } from '../../utils/data'

import Logo from '../../components/Logo/Logo'
import LinkGroup from '../../components/LinkGroup/LinkGroup'
import Button from '../../components/Button/Button'

export default class Header extends Component {
  render () {
    return (
      <div>
        <div className={css(styles.headerStripe)} />
        <div className={css(styles.headerContainer)}>
          <Logo light={false} />
          <LinkGroup links={headerMenuItems} vertical={false} type={'text'} />
          <div className={css(styles.headerEl)}>
            <input type="text" className={css(styles.headerInput)} placeholder='Search here' />
          </div>
          <div className={css(styles.headerEl)}>
            <Button color={colors.green} text={'DONATE NOW'} margin={'0px'}/>
          </div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: '15px 0px',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    background: 'white'
  },
  headerStripe: {
    width: 'inherit',
    background: `${colors.yellow}`,
    height: '5px'
  },
  headerEl: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '5px'
  },
  headerInput: {
    height: 25,
  }
})
