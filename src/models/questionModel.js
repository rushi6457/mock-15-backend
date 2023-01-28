const {Schema,model} = require('mongoose')

const QuestionSchema = new Schema({
    category:{type:String},
    difficulty:{type:String},
    question:{type:String},
    correct_answer:{type:String},
    incorrect_answer:{type:String},
    number:{type:Number}
},{
    timestamps:true
})

const QuestionModel= model("question",QuestionSchema)
module.exports = QuestionModel