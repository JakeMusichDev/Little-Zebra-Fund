import React, {Component} from 'react'
import { css } from 'aphrodite'
import { widgetStyles } from './Widget.style'
import { colors } from '../../utils/styles'

import Input from '../../components/Input/Input'
import Banner from '../../components/Banner/Banner'
import Button from '../../components/Button/Button'
import WidgetDropdown from '../../components/WidgetDropdown/WidgetDropdown'
import WidgetButtonGroup from '../../components/WidgetButtonGroup/WidgetButtonGroup'
import WidgetCheckbox from '../../components/WidgetCheckbox/WidgetCheckbox'

import {animalFormData} from '../../utils/data'

export default class Widget extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      open: true,
      activeAnimal: animalFormData[0]
    }
  }

  setActiveAnimal = (e) => {
    this.setState({activeAnimal: e[0]})
  }

  submitForm = (e) => {
    this.setState({ open: false })
  }

  render () {
    return (
      <div className={css(widgetStyles.widgetContainer)}>
        <div className={css(widgetStyles.formContainer)}>
          <div className={css(widgetStyles.header)}>MAKE A DONATION</div>
          <Input>
            <WidgetDropdown controlFunc={this.setActiveAnimal} animalData={animalFormData} />
          </Input>
          <Input><WidgetButtonGroup /></Input>
          <Input><WidgetCheckbox /></Input>
          <Input>
            <Button 
              controlFunc={this.submitForm} 
              text={"DONATE NOW"} 
              color={colors.green} 
              margin={"0px"}
            />
          </Input>
        </div>
        
        <div className={css(widgetStyles.imageContainer)}>      
          <Banner src={this.state.activeAnimal.image} />
        </div>
      </div>
    )
  }
}

