import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';

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
        <div className={css(styles.checkbox)}>
          <input onChange={this.selectItem} id='chbx' type="checkbox"/>
        </div>
        <div className={css(styles.checkbox)}>
          <label htmlFor='chbx'> I want to do a monthly donation </label>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 12,
  },
  checkbox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ":first-child": {
      marginRight: '3px'
    }
  },
})