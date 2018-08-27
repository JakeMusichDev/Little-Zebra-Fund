import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'
import {breakPoints, colors} from '../../utils/styles'

import Input from '../../components/Input/Input'
import img from '../../assets/tiger-image.jpg'

export default class Widget extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      open: true,
      activeAnimal: {name: 'Giraffe', image: img}
    }
  }


  
  render () {
    return (
      <div className={css(styles.widgetContainer)}>

        <div className={css(styles.formContainer)}>
          <h3 style={{color:'green', textAlign: 'center'}}>DONATE</h3>
          <Input>
            <input type="text"/>
          </Input>
          <Input>
            <input type="text"/>
          </Input>
          <Input>
            <input type="text"/>
          </Input>
          <Input>
            <input type="submit"/>
          </Input>
        </div>

        <div className={css(styles.imageContainer)} style={{backgroundImage: `url(${img})`}} />

      </div>
    )
  }
}

const styles = StyleSheet.create({
  widgetContainer: {
    border: '1px solid pink',
    height: '100%',
    background: `white`,
    display: 'flex',
    flexDirection: 'row',
    [breakPoints.tablet]: {
      flexDirection: 'column',
    },
    [breakPoints.mobile]: {
      flexDirection: 'column',
    }
  },
  formContainer: {
    width: '60%',
    height: '100%',
    margin: '25px',
    [breakPoints.tablet]: {
      width: '100%',
    },
    [breakPoints.mobile]: {
      width: '100%',
    }
  },
  imageContainer: {
    background: 'pink',
    width: '40%',
    height: '250px',
    display: 'flex',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    [breakPoints.tablet]: {
      width: '100%',
    },
    [breakPoints.mobile]: {
      width: '100%',
      padding: '0',
    }
  },
})