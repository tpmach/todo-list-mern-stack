import React, { useState } from 'react'
import {post} from 'axios'
import InputArea from '../pages/InputArea'

function ItemAdd(props) {
  const [item, setItem] = useState({
    itemName:""
  })

  function handleChange(event) {
    setItem({...item, [event.target.name]: event.target.value})
  }

  function handleClick(event){
    if (!item.itemName) return
    async function postItem() {
      try {
        const response = await post('/api/items', item)
        props.history.push('/items')
      } catch (error) {
        console.log(error)        
      }
    }
    postItem()
  }

  return(
    <InputArea
      changed={handleChange}
      clicked={handleClick}
    />
  )
}

export default ItemAdd