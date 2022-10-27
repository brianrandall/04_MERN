import React, { Component } from 'react'
import styles from './Style.module.css'

export class Container extends Component {
    constructor(props){
        super(props)
      }
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

export default Container