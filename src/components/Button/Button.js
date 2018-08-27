import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const Button = props => {
  const btnStyle = {
    height: 30,
    width: 100,
    marginRight: `${props.margin}`,
    color: 'white',
    background: `${props.color}`,
    border: 'none',
    borderBottom: '3px solid green',
    ":hover": {
      background: 'red'
    }
  }

  return (
    <button onClick={props.controlFunc} style={btnStyle}>{props.text}</button>
  )
}

export default Button