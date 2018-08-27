import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';

const buttons = [{title:'giraffe'}, {title:'leopard'}, {title:'panther'}]

export default class WidgetButtonGroup extends Component {
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

        <div className={css(styles.label)}>I want to donate: &nbsp; </div> 

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