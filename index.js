const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors')
const bodyParser = require('body-parser');
const uuid = require('uuid');
// const User = require('./user');
let mountains = [];
let users = [];


app.use(cors());
app.use(bodyParser.json());

app.get('/user', (req,res) => res.json(users));

app.post('/user', (req,res) => {
  const newUser = (req.body);
  const id = uuid();
  const addId = {...newUser, id: id}
  users.push(addId);
  res.json(users);
})


app.get('/', (req,res) => res.json(mountains));

app.post('/', (req,res) => {
  const newMountain = (req.body);
  const id = uuid();
  const addId = {...newMountain, id: id}
  mountains.push(addId);
  
  res.json(mountains);
})

app.delete('/:id', (req,res) => {
  const id = req.params.id;
  const idx = mountains.findIndex(mountain => mountain.id === id);
  const removedMountain = mountains[idx];
  mountains.splice(idx, 1);
  
  console.log(removedMountain);
  res.json(removedMountain);
})

app.listen(PORT, () => console.log("Server is listening on port %s", PORT));