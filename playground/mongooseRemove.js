const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');

//Remove all
// Todo.remove({}).then(res => console.log(res));

//Remove one
//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5a06843b111a46aa1bfea063').then(todo => console.log(todo));
