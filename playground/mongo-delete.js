const {MongoClient, ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
       return console.log('Unable to connect to db');
    }
    console.log('connected');
    const db = client.db('TodoApp');

    //delete many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //challenge
    db.collection('Users').findOneAndDelete({name: 'Michael'}).then((result) =>{
        console.log(result);
    });

    db.collection('Users').deleteOne({
        _id: new ObjectID('5bc89889acbb7b59d4c0e16d')
    }).then((result) => {
        console.log(result);
    });
    //client.close();
});



// db.collection('Users').insertOne(result.value, (err, result) => {
//     if(err){
//         return console.log('unable to connect', err)
//     }

//     console.log(JSON.stringify(result.ops, undefined, 2));

// })
// client.close();