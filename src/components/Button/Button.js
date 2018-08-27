import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const Button = props => {
  const btnStyle = {
    height: 30,
    width: 100,
    margin: 5,
    color: 'white',
    background: `${props.color}`,
    border: 'none',
    borderBottom: '3px solid green',
    ":hover": {
      background: 'red'
    }
  }

  return (
    <button style={btnStyle}>{props.text}</button>
  )
}

export default Button