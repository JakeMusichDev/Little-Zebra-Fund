import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {breakPoints, colors} from '../../utils/styles'

import Banner from '../Banner/Banner'
import Button from '../Button/Button'

const SectionContent = props => {
  return (
    <div className={css(styles.sectionContentContainer)}>

      <div className={css(styles.body)}>
        <div className={css(styles.bodyText)}>{props.copy}</div>
        {/* <div className={css(styles.bodyBtns)}> */}
          <Button color={colors.grey} text={'OUR HISTORY'}/>
          <Button color={colors.yellow} text={'GET INVOLVED'}/>
        {/* </div> */}
      </div>
      <div className={css(styles.banner)}>
        <Banner src={props.image} />
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  sectionContentContainer: {
    // border: '1px solid purple',
    display: 'flex',
    [breakPoints.tablet]: {
      display: 'block'
    },
    [breakPoints.mobile]: {
      display: 'block'      
    }
  },
  body: {
    width: '60%',
    height: '100%',
    margin: '25px',
    color: `${colors.grey}`,
    [breakPoints.tablet]: {
      width: '100%',
      margin: '15px',
    },
    [breakPoints.mobile]: {
      width: '100%',
      margin: '5px',
    }
  },
  banner: {
    width: '40%',
    [breakPoints.tablet]: {
      width: '100%',
      height: '250px',
    },
    [breakPoints.mobile]: {
      height: '250px',
      width: '100%',
    }
  }
})

export default SectionContent
