const mongoose = require('mongoose')

const todoItemSchema = mongoose.Schema({
  itemName: {
    type: String,
    require: [true, 'To do item is required']
  }
})

module.exports = mongoose.model('Item', todoItemSchema)