import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const LinkGroup = props => {
  const flexDirection = props.vertical ? linkGroupStyles.column : linkGroupStyles.row
  return (
    <div className={css(linkGroupStyles.container, flexDirection)}>
      {props.links.map( link => {
        return props.type === 'text' ? (
          <p className={css(linkGroupStyles.link)}>{link}</p>
        ) : (
          <img src={link} alt=""/>
        )
      })}
    </div>
  )
}

const linkGroupStyles = StyleSheet.create({
  container: {
    border: '1px solid pink',
    display: 'flex',
    margin: '0 25px',
    justifyContent: 'space-evenly',
  },
  link: {
    border: '1px solid green',
    margin: 5,
    display: 'flex',
    fontSize: 12,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  }
})

export default LinkGroup