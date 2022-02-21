import React from 'react'
import './style/ListItems.css'
function ListItems() {
    const data = [

        { id: 1, task: "buy a tshirt" },
    
        { id: 2, task: "read newspaper and books" },
    
        { id: 3, task: "go for adventure" },
    
      ];
    
    
      return (
    
        <div className="users">
    
          {data.map((user) => (
            <div className="user">
            <div>{user.task}</div>
            <input type="radio"/>
            </div>
          ))}
    
        </div>
  )
}

export default ListItems