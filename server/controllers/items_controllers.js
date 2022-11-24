const mongoose = require('mongoose');
const Items = require('../models/items');



exports.AddItems = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const ItemmData = await Items.create(data);
        console.log(ItemmData);
        res.status(201).json("Items Data Saved");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}



exports.geItems = async (req, res) => {
    try {
        ItemsData = await Items.find();
        UserResponse = [];
        ItemsData.forEach(data => {
            UserResponse.push({
                Name: data.name,
                Description: data.salesInfo[0]. description,
                Price: data.salesInfo[0].price,
                Unit: data.unit
            });
        })
        res.status(200).json({
                listItems: UserResponse
        })
    } catch (err) {
        console.log(err);
    }
}
