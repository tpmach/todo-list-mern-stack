const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/index')

const app = express()
const PORT = 8000
const MONGODB_URL = 'mongodb://localhost:27017/todolistDB'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use('/api', router)

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('Connected to the database')
})
mongoose.connection.on('error', (error) => {
  console.log(`Mongoose connection error: ${error}`)
})

app.get('/', (req, res) => {
  res.send('Server is up')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})