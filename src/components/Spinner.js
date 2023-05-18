import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

// style={{ position: 'absolute', zIndex: '9', top: '50%', left: '50%'}}

export default Spinner


