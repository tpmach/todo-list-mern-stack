const express = require('express')
const router = express.Router()
const Item = require ('../models/todolist')

router.get('/items', (req, res) => {
  Item.find((err, items) => {
    res.json(items)
  })
})

router.post('/items', (req, res) => {
  let item = new Item(req.body)
  item.save()
    .then (item => res.send(item))
    .catch (error => res.status(422).send('Item add failed'))
})

router.put('/items/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then (() => res.json('Item updated'))
    .catch (error => res.status(422).send('Item update failed'))
})

router.delete('/items/:id', (req, res) => {
  Item.findById(req.params.id, (err, item) => {
    if (!item) {
      res.status(404).send('Item not found')
    } else {
      Item.findByIdAndRemove(req.params.id)
      .then (() => res.status(200).json('Item deleted'))
      .catch (error => res.status(400).send('Item delete failed'))
    }
  })
})

module.exports = router