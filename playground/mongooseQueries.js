const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');

const _id = '6a06128a7b5fd10808ab33ed11';

if (!ObjectID.isValid(_id)) {
  console.log('Invalid Id');
}

Todo.find({ _id }).then(todos => console.log('Todos', todos));

Todo.findOne({ _id }).then(todo => console.log('Todo', todo));

Todo.findById(_id).then(todo => {
  if (!todo) return console.log('Id not found');
  console.log('Todo by ID', todo);
}).catch(err => console.log(err));
