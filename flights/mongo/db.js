const {MongoClient} = require('mongodb') // require mongodb
const url = 'mongodb+srv://ravi:ravi@cluster0.p6rse.mongodb.net/replit?retryWrites=true&w=majority'; // mongodb url
const database = 'replit' // database name
const client = new MongoClient(url)  // set data url in mondodb

async function getData(){
    // let result = await client.connect() // connect with database
    // let db = result.db(database) // databash name
    // let collection = db.collection('flights')
    // let response = await collection.find({}).toArray();
    // console.log(response)

    MongoClient.connect(url, {}).then(()=>{
        console.log('* mondodb is connected *')
    }).catch( err => {
        console.log(err)
    })
}

module.exports = getData;