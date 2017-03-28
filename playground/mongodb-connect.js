// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to MongoDB server.');

    // Insert
    // db.collection('Todos').insertOne({
    //     text: 'Something to do.',
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert todo.', error);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Tim Schreck',
    //     age: 28,
    //     location: '65802'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.', error);
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    // db.collection('Todos').find({_id: new ObjectID('58d9e261a198f91f282d8c06')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //     db.close();
    // }, (error) => {
    //     console.log('Unable to fetch todos.', error);
    // });

    // Find
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     db.close();
    // }, (error) => {
    //     console.log('Unable to fetch todos.', error);
    // });

    //Delete
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    //     db.close();
    // }, (error) => {
    //     console.log('Unable to delete duplicate todos.', error);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    //     db.close();
    // }, (error) => {
    //     console.log('Unable to delete duplicate todos.', error);
    // });

    db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
        console.log(result);
        db.close();
    }, (error) => {
        console.log('Unable to delete duplicate todos.', error);
    });

    // db.close();
});