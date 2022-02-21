import React from "react";
import DateandTime from "./DateandTime";
import List from "./List";







import './style/ToDoList.css'

function ToDoList(){
 
  return(
        <>
        <div className="container">
         <DateandTime/>
         <List/>
         
        </div>
        </>
    );
}

export default ToDoList;