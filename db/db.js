const mongoose = require('mongoose');
const condb=mongoose.connect("mongodb://localhost:27017/user_prac")
.then(() => {
    console.log("connected");
    
}).catch((err) => {
    console.log(err);
    
});

module.exports=condb;