const express= require('express');
const app= express();
const mongoose= require('mongoose');
const { MONGOURI } = require('./keys');
const PORT=5000

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected',()=>{
    console.log('connected to mongo db');
});
mongoose.connection.on('error',(err)=>{
    console.log('error connecting',err);
});

require('./models/user');
require('./models/post');
app.use(express.json());


app.use(require('./routes/auth'));
app.use(require('./routes/post'));


app.listen(PORT,()=>{
    console.log("server started");
});