import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'
import { colors } from '../../utils/styles'
import Logo from '../../components/Logo/Logo'

export default class Footer extends Component {
  render () {
    return (
      <div className={css(styles.footerContainer)}>
        <Logo light={true} />
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
    background: `${colors.grey}`,
    color: `white`
  }
})