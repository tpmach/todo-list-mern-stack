import React, { useState } from 'react'

function InputArea(){
  const [item, setItem] = useState()

  function handleChange(event) {
    setItem({[event.target.name]: event.target.value})
  }

  return (
    <div className="form">
      <input type="text" name="itemName" onChange={handleChange}/>
      <button><span>Add</span></button>
    </div>
  )
}

export default InputArea