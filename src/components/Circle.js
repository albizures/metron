import React, { Component } from 'react';
import classNames from 'classnames'
// import PropTypes from 'prop-types';

import styles from './Circle.module.scss'

export default class Circle extends Component {
  constructor() {
    super()
    this.state = {
      active: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.bar !== this.props.bar) {
      this.setState({ active: true })
      new Audio('normal-tick.mp3').play();
      setTimeout(() => {
        this.setState({
          active: false
        })
      }, 100);
    }
  }

  render () {
    const className = classNames({
      [styles.circle]: true,
      [styles.circle_active]: this.state.active,
    })
    return (
      <span className={className}/>
    )
  }
}