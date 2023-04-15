import express from "express";
const router= express.Router();

import User from "../model/User.model.js";

router.route("/sign-in").post(async (req,res) => {
    const uid= req.body.email;
    const password= req.body.password;

    User.findOne({ email: email }, (err, foundAcc) => {
        if (err) console.log(err);
    
        if (foundAcc) {
            // bcrypt.compare(password, foundAcc.password, (err, accre) => {
            if(password===foundAcc.password){
                res.send({ 
                    result: "Logged"
                });
            } 
            else 
                res.send({ result: "Wrong Password" });
        }
        else{
            res.send({ result: "Wrong Email"});
        }
    });
});

export { router as registerRoute };