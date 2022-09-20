
const { MongoClient } = require("mongodb");
const uri = process.env.HOST;


    export default  async function handler(req, res) {

        const client = new MongoClient(uri);
        await client.connect();
        const db = await client.db("Matriz");
        const collection = await db.collection("tabla");
        const data =  await collection.find({}).toArray();
       
        res.status(200).json(  {data:data[0].data} );


    }