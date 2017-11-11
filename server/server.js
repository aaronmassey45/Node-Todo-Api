const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');

let app = express();

app.use(bodyParser.json());

//POST
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then(doc => {
    res.send(doc);
  }, err => {
    res.status(400).send(err);
  });
});

//GET ALL
app.get('/todos', (req, res) => {
  Todo.find().then(todos => {
    res.send({ todos })
  }, err => {
    res.status(400).send(err);
  });
});

//GET ONE
app.get('/todos/:id', (req, res) => {
  let { id } = req.params;

  if (!ObjectID.isValid(id)) return res.status(404).send();

  Todo.findById(id).then(todo => {
    if (!todo) return res.status(404).send();

    res.send({ todo });
  }).catch(err => {
    res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = { app };