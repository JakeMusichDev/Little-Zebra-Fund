import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';

const buttons = [{title:'giraffe'}, {title:'leopard'}, {title:'panther'}]

export default class Dropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      activeItem: 'giraffe'
    };
  }

  selectItem = (e) => {    
    this.setState({ activeItem: e.target.value}, () => {
      this.closeMenu(e)
    })
  }
  
  showMenu = (event) => {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu = (event) => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  renderMenu = () => {
    return (
      <div className={css(styles.menu)} ref={(element) => {this.dropdownMenu = element}}>
        {buttons.map( (button) => <button value={button.title} onClick={this.selectItem} className={css(styles.btn)}> {button.title} </button>)}
      </div>
    )
  }

  render() {
    return (
      <div className={css(styles.container)}>

        <div className={css(styles.label)}>I want to help a &nbsp; </div>

        {/* <div className={css(styles.buttonContainer)}> */}
          <button className={css(styles.btn)} onClick={this.showMenu}>{this.state.activeItem}</button>  
          { this.state.showMenu ? this.renderMenu() : null  }
        {/* </div> */}

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