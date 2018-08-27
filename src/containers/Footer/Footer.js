import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'

export default class Footer extends Component {
  render () {
    return (
      <div className={css(styles.footerContainer)}>
        
      </div>
    )
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    padding: '20px 0px 20px 0px',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  }
})