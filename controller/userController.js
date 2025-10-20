const umod = require('../model/userModel');
const bcrypt = require('bcrypt');

const register=async(req,resp)=>{
    try {
        const {username,password}=req.body;
        const hashpass= await bcrypt.hash(password,10);
        await umod.create({username,password:hashpass});
        resp.redirect("/login");
    } catch (error) {
        console.log(error);
        
    }
};
const login=async(req,resp)=>{
    try {
        const {username,password}=req.body;
        const users= await umod.findOne({username});
        if (users && await bcrypt.compare(password,users.password)) {
            req.session.users=username;
            resp.redirect("/home");
        } else {
            resp.redirect("/login");
        }
    } catch (error) {
        console.log(error);
        
    }
};
const home=(req,resp)=>{
    if (!req.session.users) {
        resp.redirect("/login");
    } else {
        resp.render("home",{users:req.session.users});
    }
};
const logout=(req,resp)=>{
    req.session.destroy(()=>{
        resp.redirect("/login");
    });
};

module.exports={register,login,home,logout};