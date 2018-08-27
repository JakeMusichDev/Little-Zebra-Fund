import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'
import { colors, breakPoints } from '../../utils/styles'

export default class Section extends Component {
  render () {
    return (
      <div className={css(styles.sectionContainer)}>
        <div className={css(styles.body)}>
          <div className={css(styles.header)}><h1>{this.props.copy.header}</h1></div>
          <div className={css(styles.subheader)}><h4>{this.props.copy.subheader}</h4></div>
          <div className={css(styles.content)}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100vw',
    padding: '20px 0px 20px 0px',
    background: `${colors.offWhite}`,
    overflow: 'hidden',
    [breakPoints.tablet]: {
      border: '1px solid green' ,
    },
    [breakPoints.mobile]: {
      border: '1px solid blue' ,
      padding: '0',
    }
  },
  body: {
    width: '70%',
    margin: '0 auto',
    wordWrap: 'break-word',
    [breakPoints.mobile]: {
      width: '100%',
      padding: '0%',
    }
  }
})