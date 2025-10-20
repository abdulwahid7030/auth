const express = require('express');
const {register,login,home,logout} = require('../controller/userController');

const routs=express.Router();

routs.get("/register",(req,resp)=>{
    resp.render("register");
});
routs.post("/register",register);

routs.get("/login",(req,resp)=>{
    resp.render("login");
});
routs.post("/login",login);

routs.get("/home",home);
routs.get("/logout",logout);

module.exports=routs;