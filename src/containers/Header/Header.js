import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'
import { colors } from '../../utils/styles'
import Logo from '../../components/Logo/Logo'

export default class Header extends Component {
  render () {
    return (
      <div>
        <div className={css(styles.headerStripe)} />
        <div className={css(styles.headerContainer)}>
          <Logo light={false} />
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
    background: 'white'
  },
  headerStripe: {
    width: 'inherit',
    background: `${colors.yellow}`,
    height: '5px'
  }
})