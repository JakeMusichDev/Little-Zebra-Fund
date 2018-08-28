import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const SocialIcons = props => {
  return (
    <div className={css(styles.main)}>
      {props.icons.map( icon => <img className={css(styles.icon)} src={icon} alt=""/>)}
    </div>
  )
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  icon: {
    margin: 5,
    height: '20px',
    opacity: 0.8,
    ":hover": {
      opacity: 1
    }
  },
})

export default SocialIcons