const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const users = require('./routes/api/users');
const articles = require('./routes/api/articles');
const files = require('./routes/api/files');
const { checkToken } = require('./middleware/auth');

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(checkToken);
app.use("/api/users",users);
app.use("/api/articles",articles);
app.use("/api/files", files)

app.use(express.static('client/build'));
if(process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.get('/*',(req,res) =>{
        res.sendFile(path.resolve(___dirname,'../client','build','index.html'))
    })
}

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})