import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const Banner = props => {
  const style = { 
    backgroundImage: `url(${props.src})`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    height: '100px',
    width: 'inherit'
  }

  return (
    <div style={style} />
  )
}

const bannerStyles = StyleSheet.create({
  bannerContainer: {
  }
})

export default Banner
