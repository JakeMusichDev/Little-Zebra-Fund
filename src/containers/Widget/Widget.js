import React, {Component} from 'react'
import { css } from 'aphrodite'
import { widgetStyles } from './Widget.style'

import Input from '../../components/Input/Input'
import Banner from '../../components/Banner/Banner'
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
        
        <div className={css(widgetStyles.imageContainer)}>      
          <Banner src={img} />
        </div>
      </div>
    )
  }
}

