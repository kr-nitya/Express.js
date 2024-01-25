const express = require('express');
const app = express();
const router = express.Router();
//Middleware for all type of request
router.use((req,res,next)=>{
    console.log("MiddleWare");
    next();
});
//Middleware for /user/:id
router.use("/user/:id",(req,res,next)=>{
    console.log("User ID = ",req.params);
    next();
});
app.use("/",router);
app.listen(4000);