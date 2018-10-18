const {MongoClient, ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
       return console.log('Unable to connect to db');
    }
    console.log('connected');
    const db = client.db('TodoApp');


    db.collection('Users').find({name: 'Michael'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log('Unable to fetch', err);
    });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch', err);
    // });


    // db.collection('Todos').find({
    //     _id: new ObjectID('5bc8908b0215e65aaa681935')
    // }).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch', err);
    // });
    //client.close();
});