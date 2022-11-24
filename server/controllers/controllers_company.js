const { response } = require('express');
const mongoose = require('mongoose');
const comapny = require('../models/company');



exports.addCuestomer = async (req, res) => {
    try {
    const data = req.body;
    console.log(data);
    
    const cuestomer = await comapny.create(data);
    console.log(cuestomer)
    res.status(200).json({message: "Done"})
    }catch(err){
        console.log(err.message)
        res.status(400).send({message: err.message});

    }

}


exports.AllCuestomer  = async(req,res) => {
    try{
        cuestomerData = await comapny.find();
        console.log(cuestomerData)
        usersResponse = [];
        cuestomerData.forEach(data => {
            usersResponse.push({
                Name: data.primaryContact[0].firstName +" " +  data.primaryContact[0].lastName,
                email: data.email, 
                Mobile: data.phoneNumber[0].Mobile,
                comapnyName: data.comapnyName
            })
        });
        res.status(200).json({
           list: usersResponse
        })
    }catch(err){
        console.log(err)
        
    }
}

