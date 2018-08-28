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
    borderBottom: '2px solid green',
  }

  return (
    <button className='button' onClick={props.controlFunc} style={btnStyle}>{props.text}</button>
  )
}

export default Button