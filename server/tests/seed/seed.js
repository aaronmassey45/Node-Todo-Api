const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('../../models/todo');
const {User} = require('../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [
  {
    _id: userOneId,
    email: 'aaron@aaron.com',
    password: 'aaron1pass',
    tokens: [
      {
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth'}, 'abc123').toString()
      }
    ]
  },
  {
    _id: userTwoId,
    email: 'aaron@fake.com',
    password: 'aaron2pass'
  }
]

const todos = [
  {
    _id: new ObjectID(),
    text: '1st test todo'
  },
  {
    _id: new ObjectID(),
    text: '2nd test todo',
    completed: false,
    completedAt: 888
  }
];

const populateTodos = done => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = done => {
  User.remove({}).then(() => {
    let userOne = new User(users[0]).save();
    let userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done())
}

module.exports = { todos, populateTodos, users, populateUsers };
