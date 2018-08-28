import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const Banner = props => {
  const style = { 
    backgroundImage: `url(${props.src})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  }
  
  return (
    <div style={style} />
  )
}

export default Banner
