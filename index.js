const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const users = ['asad', 'akib', 'rakib', 'sakib', 'makib']
app.get('/users/:id',  (req, res) => {
  const id = req.params.id;
  const name = users[id]
  res.send({id, name})
})

app.get('/',  (req, res) => {
  const fruit = {
    product: 'mango',
    price: '200'
  }
  res.send(fruit)
})

//post
app.post('/addUser',  (req, res) => {
  //save to database
  const user = req.body
  user.id = 44
  res.send(user)
})




app.listen(3000, () => (console.log('Listening to port 3000')))