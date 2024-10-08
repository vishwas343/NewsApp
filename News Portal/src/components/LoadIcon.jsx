import React, { Component } from 'react'
import spinner from './spinner.gif'
export class LoadIcon extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <img src={spinner} alt="Loading..." height={25} />
        </div>
      </div>
    )
  }
}

export default LoadIcon
