import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import { breakPoints } from '../../utils/styles'

const Input = (props) => {
  return (
    <div className={css(inputStyle.inputContainer)}>
      {props.children}
    </div>
  )
}

const inputStyle = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    border: '1px solid cyan',
    padding: '5px',
    [breakPoints.tablet]: { paddingTop: '2%'},
    [breakPoints.mobile]: { paddingTop: '1%' }
  }
})

export default Input