import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import { breakPoints } from '../../utils/styles'
import logoLight from '../../assets/logo-light.svg'
import logoDark from '../../assets/logo-dark.svg'

const Logo = props => {
  const src = props.light ? logoLight : logoDark
  return (
    <div className={css(styles.logoC)}>
      <img className={css(styles.logo)} src={src} alt=""/>
    </div>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    [breakPoints.tablet]: { height: 40 },
    [breakPoints.mobile]: { height: 30 },
  }
})

export default Logo