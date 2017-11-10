const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a047f80111a46aa1bfe94e7')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(data => console.log(data));

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a03ad0b9a1cd30d746ade35')
  }, {
    $set: {
      name: "Aaron"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then(data => console.log(data));

  // db.close();
});
