// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require("mongodb");


const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID()
console.log(id.id.length)
console.log(id.getTimestamp())
console.log(id.toHexString().length)

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log("unable to connect database");
    }
    console.log("connected correctly");
    const db = client.db(databaseName);

    db.collection("users").insertOne({
        _id: id,
        name: "kumud",
        age: 27
      }, (error, result) => {
        if(error){
            return console.log("unable")
        }

        console.log(result.ops)
      });

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "kumud",
    //       age: 27
    //     },
    //     {
    //       name: "raushan",
    //       age: 23
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //     [
    //       {
    //         description: "clean my home",
    //         completed: true
    //       },
    //       {
    //         description: "play game",
    //         completed: false
    //       },
    //       {
    //         description: "plot tree",
    //         completed: false
    //       }
    //     ],
    //     (error, result) => {
    //       if (error) {
    //         return console.log("unable");
    //       }
  
    //       console.log(result.ops);
    //     }
    //   );
  }
);
