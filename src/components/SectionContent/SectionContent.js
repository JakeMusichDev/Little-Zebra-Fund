import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import Banner from '../Banner/Banner'

const SectionContent = props => {
  return (
    <div className={css(styles.sectionContentContainer)}>
      <div className={css(styles.body)}>
        <div className={css(styles.bodyText)}>
          {props.copy}
        </div>
        <div className={css(styles.bodyBtns)}>

        </div>
      </div>
      <Banner src={props.image} />
    </div>
  )
}

const styles = StyleSheet.create({
  sectionContentContainer: {

  }
})

export default SectionContent
