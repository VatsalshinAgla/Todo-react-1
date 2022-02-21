import React from "react";
import DateandTime from "./DateandTime";
import './style/ToDoList.css'

function ToDoList(){
 
  return(
        <>
        <div className="container">
          <DateandTime/>
        </div>
        </>
    );
}

export default ToDoList;