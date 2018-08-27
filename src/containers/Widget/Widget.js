import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'
import Input from '../../components/Input/Input'

export default class Widget extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      open: true 
    }
  }
  
  render () {
    return (
      <div className={css(styles.widgetContainer)}>
        Widget
        <Input>
          <input type="text"/>
        </Input>
        <Input>
          
        </Input>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  widgetContainer: {
    border: '1px solid pink'
  }
})