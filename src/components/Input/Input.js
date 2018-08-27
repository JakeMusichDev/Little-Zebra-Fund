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
    padding: '3%',
    [breakPoints.tablet]: {
      padding: '2%'
    },
    [breakPoints.mobile]: {
      padding: '1%'
    }
  }
})

export default Input