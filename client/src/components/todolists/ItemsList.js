import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ToDoItem from '../pages/ToDoItem'
import ItemAdd from './ItemAdd'

function ItemsList(props) {
  const [items, setItems] = useState([])

  useEffect(function () {
    async function getItems() {
      try {
        const response = await axios.get('/api/items')
        setItems(response.data)
      } catch (error) {
        console.log(error)        
      }
    }
    getItems()
  }, [props])

  
  async function deleteItem(id){
    try {
      await axios.delete(`/api/items/${id}`)
      props.history.push('/items')
    } catch (error) {
      console.log(error)       
    }    
  }
  

  return (
    <div>
      <ItemAdd />
      {items.map(item => {
          return (
            <ToDoItem 
              key={item._id} 
              id={item._id}
              value={item._id}
              name={item.itemName}
              checked={deleteItem}
            />)
    })}
    </div>
  )
}

export default ItemsList