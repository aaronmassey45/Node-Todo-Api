const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Ya mama',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert item', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Blake',
    age: 23,
    location: 'San Antonio'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert item', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
