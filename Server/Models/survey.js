"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const surveyDatabaseSchema = new Schema({
    name: String,
    owner: String,
    survey_id: String,
    isActive: Boolean,
    startDate: String,
    endDate: String,
    question1: String,
    question1option1: String,
    question1option2: String,
    question1option3: String,
    question1option4: String,
    question2: String,
    question2option1: String,
    question2option2: String,
    question2option3: String,
    question2option4: String,
    question3: String,
    question3option1: String,
    question3option2: String,
    question3option3: String,
    question3option4: String,
    question4: String,
    question4option1: String,
    question4option2: String,
    question4option3: String,
    question4option4: String,
    question5: String,
    question5option1: String,
    question5option2: String,
    question5option3: String,
    question5option4: String
}, {
    collection: "Survey"
});
const Model = mongoose_1.default.model("Survey", surveyDatabaseSchema);
exports.default = Model;
//# sourceMappingURL=survey.js.map