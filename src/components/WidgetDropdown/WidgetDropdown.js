import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';

const buttons = [{title:'giraffe'}, {title:'leopard'}, {title:'panther'}]

export default class WidgetDropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      activeItem: null
    };
  }

  selectItem = (e) => {    
    this.setState({ activeItem: e.target.value})
  }

  render() {
    return (
      <div className={css(styles.container)}>

        <div className={css(styles.label)}><div>I want to help </div></div>
        <div className={css(styles.selectContainer)}>
          <select className={css(styles.select)}>
            {buttons.map( (button) => <option value={button.title} onClick={this.selectItem} className={css(styles.option)}> {"a " + button.title} </option>)}
          </select>
        </div>

      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  label: {
    fontSize: 12,
    width: 'auto',
    display: 'inherit',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  selectContainer: {
    width: '70%',
  },
  select: {
    appearance: 'none',
    border: '1px solid black',
    borderRadius: '0px',
    background: 'white',
    padding: '5%',
    marginLeft: '5px',
    width: '100%',
  },
  option: {
    border: '1px solid black',
    height: '100%'
  }
})