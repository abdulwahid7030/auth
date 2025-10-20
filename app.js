const express = require('express');
const condb = require('./db/db');
const routs = require('./router/userRoute');
const session = require('express-session');
condb;

const app=express();
app.use(session
    (
        {
            secret:"qwertyuiop",
            saveUninitialized:false,
            resave:false
        }
    )
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use("/",routs);

app.listen(4000,()=>{
    console.log("chalu...");
    
});