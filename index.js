const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')


const app = express()
const port = 3000

const counter = {
  number: 0
}

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.get('/user', db.getUserByEmail)
app.get('/counter/add', (req, res) => {
  counter.number += 1;
  res.send({ message: "counter incremented by 1" })
})
app.get('/counter/show', (req, res) => {
  res.status(200).send(counter)
})
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(5000, () => {
  console.log('App running on port 5000.')
})