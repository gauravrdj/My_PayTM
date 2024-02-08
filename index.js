const express=require('express');
const {user} = require('./db');
const {mainRouter}=require('./routes/index');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const bodyParser=require('body-parser');
const {JWT_SECRET} =require('./config');
const port=process.env.PORT || 3000;
const path=require('path');

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/v1", mainRouter);

app.use(express.static(path.join(__dirname, "./frontend/dist")));

app.get('*', (req,res)=>{
res.sendFile(path.join(__dirname, './frontend/dist/index.html'));
});


app.listen(port);

 