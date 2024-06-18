const eventModel = require("../models/event.model");

const getAllEvent = async (req, res) => {
    try {
        const event = await eventModel.find({});
        res.status(200).json({data: event, status: "Success"});
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
}

const createEvent = async (req, res) => {
    const {title, image, content} = req.body;
    try {
        
        const newEvent = new eventModel({title: title, image: image, content: content});
        await newEvent.save();
        
        res.status(200).json({message: "Event created successfully", newEvent: newEvent}); 
        
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
        
    }
}

module.exports = {getAllEvent, createEvent};