import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const responseDatabaseSchema = new Schema({
   
    name: String,
    question1: String,
    answer1: String,

    question2: String,
    answer2: String,

    question3: String,
    answer3: String,

    question4: String,
    answer4: String,

    question5: String,
    answer5: String  
},
{
    collection: "Responses"
});

const Model = mongoose.model("Responses", responseDatabaseSchema);
export default Model;
