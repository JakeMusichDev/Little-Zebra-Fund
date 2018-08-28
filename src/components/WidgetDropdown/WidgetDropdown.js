import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import { breakPoints } from '../../utils/styles'

export default class WidgetDropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      activeItem: null
    };
  }

  selectItem = (e) => {
    const {controlFunc, animalData} = this.props
    const activeAnimal = animalData.filter( (anim) => anim.name === e.target.value)
    controlFunc(activeAnimal)
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.label)}><div>I want to help </div></div>
        <div className={css(styles.selectContainer)}>
          <select className={css(styles.select)} onChange={this.selectItem}>
            {this.props.animalData.map( (button) => <option key={button.name} value={button.name}  className={css(styles.option)}> {"a " + button.name} </option>)}
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
    width: '100%',
    [breakPoints.tablet]: {
      flexDirection: 'column',
    },
    [breakPoints.mobile]: {
      flexDirection: 'column',
    }
  },
  label: {
    fontSize: 12,
    width: '25%',
    display: 'inherit',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    [breakPoints.tablet]: {
      width: '100%',
      marginBottom: '5px'
    },
    [breakPoints.mobile]: {
      width: '100%',      
      marginBottom: '5px'
    }
  },
  selectContainer: {
    width: '75%',
    [breakPoints.tablet]: {
      width: '100%'
    },
    [breakPoints.mobile]: {
      width: '100%'      
    }
  },
  select: {
    appearance: 'none',
    border: '1px solid black',
    borderRadius: '0px',
    background: 'white',
    padding: '3%',
    marginLeft: '5px',
    width: '100%',
    [breakPoints.tablet]: {
      marginLeft: '0px',
    },
    [breakPoints.mobile]: {
      marginLeft: '0px',
    }
  },
  option: {
    border: '1px solid black',
    // height: '100%'
  }
})