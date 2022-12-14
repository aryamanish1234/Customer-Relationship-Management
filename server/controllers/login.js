const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const login = require('../models/login');

// Demo 
const secret = "qwert345"


const genEnail =  randomEmail = async() => {
    var strValues="abcdefg12345"; 
    var strEmail = ""; 
    var strTmp; 
    for (var i=0;i<10;i++) { 
    strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
    strEmail = strEmail + strTmp; 
    } 
    strTmp = ""; 
    strEmail = strEmail + "@"; 
    for (var j=0;j<8;j++) { 
    strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
    strEmail = strEmail + strTmp; 
    } 
    strEmail = strEmail + ".com" 
    return strEmail; 
    } 
const getAutoGeneratedPassword = () => {
    var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal;
}


exports.AdminSignup = async(req, res) => {
    try{
    const email  =genEnail()
    const password = getAutoGeneratedPassword();
    const data = {
        email: email,
        password: bcrypt.hashSync(password,8)
    }
    console.log(data);
    const user = await login.create(data);
    console.log(user);
    res.status(200).json({
        success: user    
    }
   )
}catch (err) {
    console.log(err);
}
}

exports.signin = async(req, res) => {
    const user = await User.findOne({ email :req.body.email });
    if (user == null) {
        return res.status(400).send({
            message: "Faild ! User id doesn't exist "
        })
    }
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

    if (!isPasswordValid) {
        return res.status(401).send({
            message: "Invalid Password "
        })
    }

    //Access Token 
    const token = jwt.sign({ id: user.userId }, secret, {
        expiresIn: 3600
    })

    res.status(200).send({

        accessToken: token
    })
}