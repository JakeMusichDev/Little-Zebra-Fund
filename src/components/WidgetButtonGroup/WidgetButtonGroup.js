import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import { colors } from '../../utils/styles'

const buttons = ['$3', '$5', '$10']

export default class WidgetButtonGroup extends Component {
  constructor() {
    super();
    
    this.state = {
      activeButton: null,
      value: '',
      inputActive: false,
      inputValid: false
    };
  }

  selectItem = (e) => {
    this.setState({ activeButton: e.target.value, inputActive: false, inputValid: false})
  }

  onTextInput = (e) => {

    if(e.target.value < 11 || /[^0-9]/.test(e.target.value) ) {
      this.setState({ value: e.target.value, activeButton: null, inputActive: true, inputValid: false })    
    } else {
      this.setState({ value: e.target.value, activeButton: null, inputActive: true, inputValid: true })
    }
  }
  

  render() {
    const activeButtonStyle = [styles.button, styles.active]
    const activeInput = this.state.inputValid ? [styles.textInput, styles.valid] : [styles.textInput, styles.invalid]
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.label)}>I want to donate: &nbsp; </div> 
        <div className={css(styles.inputGroup)}>
          <div className={css(styles.buttonGroup)}>
            {buttons.map( (button) => { 
              return <button 
                value={button}
                onClick={this.selectItem} 
                className={css(this.state.activeButton === button ? activeButtonStyle : styles.button)}
                >
                {button}
              </button>
            })}
          </div>
          <div className={css(styles.separator)}><div>or</div></div>
          <input className={css(this.state.inputActive ? activeInput : styles.textInput)} type="text" placeholder='$' onChange={this.onTextInput}/>
        </div>

      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    fontFamily: ['Open Sans', 'sans-serif']
  },
  label: {
    width: '100%',
    fontSize: 12,
    marginBottom: '2%'
  },
  inputGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  buttonGroup: {
    width: '47%',
  },
  button: {
    border: '1px solid grey',
    height: '45px',
    width: '30%',
    fontSize: 14,
    fontFamily: ['Open Sans', 'sans-serif'],
    outline: 'none',
    marginRight: '5%',
    ':last-child': {
      marginRight: '0px'
    }
  },
  active: {
    background: `${colors.green}`,
    color: 'white'
  },
  separator: { 
    fontSize: 12,
    width: '6%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '47%',
    outline: 'none'
  },
  valid: {
    border: '2px solid green'
  },
  invalid: {
    border: '2px solid red'
  }
})