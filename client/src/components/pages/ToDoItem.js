import React, { useState } from 'react'

function TodoItem(props) {
  const [checked, setChecked] = useState(false)

  function handleClick(){
    setChecked(!checked)
    props.checked(props.id)
    console.log('Checkbox checked');
    
  }

  return (
    <div className="lists"> 
      <input type="checkbox" value={props.value} name="checkbox" onChange={handleClick} />{props.name}
    </div>
  )
}

export default TodoItem