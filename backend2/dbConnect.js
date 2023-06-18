const mongoose = require("mongoose")

const dbConnnect = () => {

const connectionParams = {useNewUrlParser: true}


// This line establishes a connection to the MongoDB database using Mongoose. 
// It uses the mongoose.connect - 2 Arguments -
//  1. process.env.DB -address of MongoDB database
//  2. object contain useNewUrlParser -used to ensure that Mongoose uses the updated URL parser 
// for parsing the MongoDB connection string. This option is important to
//  avoid deprecation warnings and maintain compatibility with newer versions of MongoDB and Mongoose.

mongoose.connect(process.env.DB, connectionParams)

mongoose.connection.on("connected", ()=>
{
    console.log("Connected to Database sucessfully")
})
mongoose.connection.on("error", (err)=>
{
    console.log("error while connecting to dB" +err)
})
mongoose.connection.on("disconnected", ()=>
{
    console.log("disconnected")
})




}

module.exports = dbConnnect
