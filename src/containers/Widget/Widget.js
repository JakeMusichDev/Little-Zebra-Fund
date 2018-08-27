import React, {Component} from 'react'
import { css } from 'aphrodite'
import { widgetStyles } from './Widget.style'
import { colors } from '../../utils/styles'

import Input from '../../components/Input/Input'
import Banner from '../../components/Banner/Banner'
import Dropdown from '../../components/Dropdown/Dropdown'

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
      <div className={css(widgetStyles.widgetContainer)}>

        <div className={css(widgetStyles.formContainer)}>
          <h3 style={{color:`${colors.green}`, textAlign: 'center'}}>MAKE A DONATION</h3>
          <Input>
            <Dropdown />
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
        
        <div className={css(widgetStyles.imageContainer)}>      
          <Banner src={img} />
        </div>
      </div>
    )
  }
}

