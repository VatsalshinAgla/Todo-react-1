import React, { Component } from 'react'
import './style/DateandTime.css'
export class DateandTime extends Component {
  render() {
    return (
        <div className="row dateday mt-5">
        <div className="col">
            <div className="row">
                <div className="col date">12
                <div className="col monthandyear">
                    <b>JAN</b> 
                    <br/> 2016
                </div>
                </div>
            </div>
        </div>
             <div className="col dayname">TUESDAY</div>
    </div>
   ); 
    
  }
}

export default DateandTime