import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import SocialIcons from '../SocialIcons/SocialIcons'

const LinkGroup = props => {
  const flexDirection = props.vertical ? linkGroupStyles.column : linkGroupStyles.row
  const header = props.header ? <div className={css(linkGroupStyles.header)}>{props.header.toUpperCase()}</div> : null
  if(props.type === 'text') {
    return (
      <div className={css(linkGroupStyles.main, flexDirection)}>
        {header}
        { props.links.map( link => <div key={`link-${link}`}  className={css(linkGroupStyles.linkContainer)}><p className={css(linkGroupStyles.link)}>{link}</p></div> )}
      </div>
    )
  } else {
    return (
      <div className={css(linkGroupStyles.main, flexDirection)}>
        {header}
        <SocialIcons icons={props.links} />
      </div>
    )
  }
}

const linkGroupStyles = StyleSheet.create({
  main: {
    margin: '0 25px',
  },
  header: {
    fontSize: 9,
    margin: 5,
    marginBottom: '10px',
  },
  linkContainer: {
    display: 'flex',
  },
  link: {
    cursor: 'pointer',
    margin: 5,
    display: 'flex',
    fontSize: 10,
    opacity: 0.8,
    ":hover": {
      opacity: 1
    }
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  }
})

export default LinkGroup