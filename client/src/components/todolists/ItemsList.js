import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ToDoItem from '../pages/ToDoItem'

function ItemsList() {
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
  }, [])

  return (
    <div>
      {items.map(item => {
          return (<ToDoItem key={item._id} name={item.itemName}/>)
    })}
    </div>
  )
}

export default ItemsList