import React, {Component} from 'react'
import { css } from 'aphrodite'
import { widgetStyles } from './Widget.style'
import { colors } from '../../utils/styles'

import Input from '../../components/Input/Input'
import Banner from '../../components/Banner/Banner'
import Button from '../../components/Button/Button'
import Dropdown from '../../components/Dropdown/Dropdown'
import WidgetButtonGroup from '../../components/WidgetButtonGroup/WidgetButtonGroup'
import WidgetCheckbox from '../../components/WidgetCheckbox/WidgetCheckbox'
import img from '../../assets/tiger-image.jpg'

export default class Widget extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      open: true,
      activeAnimal: {name: 'Giraffe', image: img}
    }
  }

  submitForm = (e) => {
    this.setState({
      open: false 
    })
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
            <WidgetButtonGroup />
          </Input>
          <Input>
            <WidgetCheckbox />
          </Input>
          <Input>
            <Button controlFunc={this.submitForm} text={"DONATE NOW"} color={colors.green}/>
          </Input>
        </div>
        
        <div className={css(widgetStyles.imageContainer)}>      
          <Banner src={img} />
        </div>
      </div>
    )
  }
}

