import React from 'react'

function TodoItem(props) {
  return (
    <div className="lists"> 
      <input type="checkbox" value={props.name}/>{props.name} 
    </div>
  )
}

export default TodoItem