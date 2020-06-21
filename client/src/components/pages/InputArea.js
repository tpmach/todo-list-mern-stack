import React, { useState } from 'react'

function InputArea(props){
  return (
    <div >
      <form className="form">
        <input type="text" name="itemName" onChange={props.changed}/>
        <button onClick={props.clicked}><span>Add</span></button>
      </form>
    </div>
  )
}

export default InputArea