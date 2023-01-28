const QuestionModel = require("../models/questionModel")

const GetQuestions = async(req,res) =>{
   
        try {
            //  const category = req.query.category;
            const difficulty = req.query.difficulty;
            const limit = req.query.limit;

            const questions = await QuestionModel.find( {difficulty}).limit(limit)
            res.send(questions).status(200)
        } catch (error) {
            res.send(error)
        }
}


module.exports = {
    GetQuestions
}