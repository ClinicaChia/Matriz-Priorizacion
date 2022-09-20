
const { MongoClient } = require("mongodb");
const uri = process.env.HOST;
export default  async function handler(req, res) {
    const tabla = req.body.tabla;
    
    const headers = tabla[1];

    let data = [];
    
    for(let i = 2; i < tabla.length; i++){
        
        let obj = {};
        let temp = tabla[i];
        for (let i = 0; i < temp.length; i++) {
            
            obj[headers[i]] = temp[i];
            
        }
        data.push(obj);
        
    }
    
    const client = new MongoClient(uri);
    await client.connect();
    const db = await client.db("Matriz");
    const collection = await db.collection("tabla");

    await collection.updateOne({}, { $set: { data: data } });


    //set data to database

    res.status(200).json("OK");
  }
  