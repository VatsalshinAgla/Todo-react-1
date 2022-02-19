import React, { Component } from 'react'
import './style/DateTime.css'
export class DateTime extends Component {
  render() {
    return (
      <div className='DateTime'>
        <div className='date'>
        <h1>15</h1>
        </div>
        <div className='MonthYear'>
            <p>JAN
            <br/>
            2021
            </p>
        </div>
        <div className='DaysName'>
            <h6>Monday</h6>
            
        </div>
    </div>
    )
  }
}

export default DateTime

