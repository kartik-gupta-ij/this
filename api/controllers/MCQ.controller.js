import MCQ from "../models/MCQ.model.js";



export const createMCQ = async (req, res) => {
    const { MCQs } = req.body;

    if (!Array.isArray(MCQs) || MCQs.length === 0) {
        return res.status(400).json({ message: "Invalid input. 'MCQs' should be a non-empty array." });
    }

    try {
        const createdMCQs = await MCQ.insertMany(MCQs);
        res.status(201).json({ message: "MCQs created successfully", data: createdMCQs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};
