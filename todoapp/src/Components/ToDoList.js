import React from "react";
import Button from "./Button";
import DateandTime from "./DateandTime";
import List from "./List";







import './style/ToDoList.css'

function ToDoList(){
 
  return(
        <>
        <div className="container">
         <DateandTime/>
         <List/><br/>
         <footer><Button/></footer>
        </div>
        </>
    );
}

export default ToDoList;