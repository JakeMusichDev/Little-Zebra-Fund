import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';

const buttons = [{title:'giraffe'}, {title:'leopard'}, {title:'panther'}]

export default class WidgetCheckbox extends Component {
  constructor() {
    super();
    
    this.state = { checked: false }
  }

  selectItem = (e) => {    
    this.setState({ checked: !this.state.checked})
  }
  

  render() {
    return (
      <div className={css(styles.container)}>
        <input onChange={this.selectItem} id='chbx' type="checkbox"/>
        <label for='chbx'> I want to do a monthly donation </label>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    // border: '1px solid  blue'
  },
  label: {
    border: '1px solid  blue'

  },
  buttonContainer: {
    height: '100%',
    border: '1px solid  blue'
  },
  menu: {
    width: '100px',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
  },
  btn: {
    border: '1px solid black',
    height: '100%'
    // padding: '0px 100%'
  }
})