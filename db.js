const mongoose = require("mongoose");
const mongoURL = 'mongodb://localhost:27017/hotel';
mongoose.connect(mongoURL,
    {
        useNewUrlParser:true,
        UseUnifiedTopology:true
    }
)
const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected to mongoDB server");
});
db.on('disconnected',()=>{
    console.log("disconnected to mongoDB server");
});
db.on('error',()=>{
    console.log("mongoDB server connection error");
});
module.exports =db;