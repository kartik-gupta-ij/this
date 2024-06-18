const blogModel = require("../models/blog.model")

const getAllBlog = async (req, res) => {
    try {
        const blog = await blogModel.find({});
        res.status(200).json({data: blog, status: "Success"});
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
}

const createBlog = async (req, res) => {
    const {headline, image, content} = req.body;
    try {
        
        const newBlog = new blogModel({headline: headline, image: image, content: content});
        await newBlog.save();
        
        res.status(200).json({message: "Blog created successfully", newBlog: newBlog}); 
        
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
        
    }
}

module.exports = {getAllBlog, createBlog};