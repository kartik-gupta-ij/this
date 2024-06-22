import Comment from '../models/comment.model.js'

export const getQuestions = async (req, res) => {
 
    try {
        const questions = await Comment.find({});
        res.status(200).json({data: questions, status: "success"});
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
}


export const createQuestion = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ success: false, message: "Title is required" });
  }

  try {
    const question = new Comment({ title, userId: req.user.id, comments: [] });
    const savedQuestion = await question.save();
    
    return res.status(201).json({ 
      success: true, 
      message: "Question created successfully", 
      data: savedQuestion 
    });
  } catch (error) {
    console.error('Error creating question:', error);
    return res.status(500).json({ success: false, message: "Something went wrong" });
}
};

export const createComment = async (req, res) => {
    const { id } = req.params;
    const { ans } = req.body;
    console.log(id, ans);
    try {
        const question = await Comment.findById(id);
        console.log(question);
        
        if(!question){
            return res.status(401).json({message: "Question not found"});
        }
        
        const comment = question.comments;
        const newComment = {text: ans, userId: req.user.id};
        comment.push(newComment);

        await question.save();
        
        res.status(200).json({message: "commnet successfully added", comment: comment});
        
    } catch (error) {
        return res.status(500).json({ success: false, message: "Something went wrong" });
        
    }
}
