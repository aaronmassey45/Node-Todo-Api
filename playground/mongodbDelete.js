const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  db.collection('Users').deleteMany({ name: 'AaronMassey' });

  //deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then(data => {
  //   console.log(data);
  // });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({ _id: new ObjectID("5a03ad018a8f012f2cb456fa") }).then(data => {
    console.log(JSON.stringify(data, undefined, 2));
  });

  // db.close();
});
