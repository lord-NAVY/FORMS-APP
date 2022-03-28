"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessResponsePage = exports.DisplayResponsePage = exports.performDelete = exports.ProcessEditPage = exports.DisplayEditPage = exports.ProcessAddPage = exports.DisplayAddPage = exports.DisplaySurveyPage = exports.DisplayHomePage = void 0;
const survey_1 = __importDefault(require("../Models/survey"));
const response_1 = __importDefault(require("../Models/response"));
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplaySurveyPage(req, res, next) {
    survey_1.default.find((err, surveyCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Surveys', page: 'survey', surveys: surveyCollection });
    });
}
exports.DisplaySurveyPage = DisplaySurveyPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add Survey', page: 'add' });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessAddPage(req, res, next) {
    let newSurvey = new survey_1.default({
        "name": req.body.name,
        "owner": req.body.owner,
        "isActive": req.body.isActive == "on" ? true : false,
        "survey_id": req.body.survey_id,
        "startDate": req.body.startDate,
        "endDate": req.body.endDate,
        "question1": req.body.question1,
        "question1option1": req.body.question1option1,
        "question1option2": req.body.question1option2,
        "question1option3": req.body.question1option3,
        "question1option4": req.body.question1option4,
        "question2": req.body.question2,
        "question2option1": req.body.question2option1,
        "question2option2": req.body.question2option2,
        "question2option3": req.body.question2option3,
        "question2option4": req.body.question2option4,
        "question3": req.body.question3,
        "question3option1": req.body.question3option1,
        "question3option2": req.body.question3option2,
        "question3option3": req.body.question3option3,
        "question3option4": req.body.question3option4,
        "question4": req.body.question4,
        "question4option1": req.body.question4option1,
        "question4option2": req.body.question4option2,
        "question4option3": req.body.question4option3,
        "question4option4": req.body.question4option4,
        "question5": req.body.question5,
        "question5option1": req.body.question5option1,
        "question5option2": req.body.question5option2,
        "question5option3": req.body.question5option3,
        "question5option4": req.body.question5option4
    });
    survey_1.default.create(newSurvey, (err, Survey) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/survey');
        }
    });
    console.log(newSurvey);
}
exports.ProcessAddPage = ProcessAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    survey_1.default.findById(id, (err, surveys) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('index', { title: 'Edit Survey', SurveysList: surveys, page: 'edit' });
        }
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedSurvey = new survey_1.default({
        "_id": id,
        name: req.body.name,
        owner: req.body.owner,
        isActive: req.body.isActive == "on" ? true : false,
        survey_id: req.body.survey_id,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        question1: req.body.question1,
        question1option1: req.body.question1option1,
        question1option2: req.body.question1option2,
        question1option3: req.body.question1option3,
        question1option4: req.body.question1option4,
        question2: req.body.question2,
        question2option1: req.body.question2option1,
        question2option2: req.body.question2option2,
        question2option3: req.body.question2option3,
        question2option4: req.body.question2option4,
        question3: req.body.question3,
        question3option1: req.body.question3option1,
        question3option2: req.body.question3option2,
        question3option3: req.body.question3option3,
        question3option4: req.body.question3option4,
        question4: req.body.question4,
        question4option1: req.body.question4option1,
        question4option2: req.body.question4option2,
        question4option3: req.body.question4option3,
        question4option4: req.body.question4option4,
        question5: req.body.question5,
        question5option1: req.body.question5option1,
        question5option2: req.body.question5option2,
        question5option3: req.body.question5option3,
        question5option4: req.body.question5option4
    });
    survey_1.default.updateOne({ _id: id }, updatedSurvey, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/survey');
        }
    });
    console.log(updatedSurvey);
}
exports.ProcessEditPage = ProcessEditPage;
function performDelete(req, res, next) {
    let id = req.params.id;
    survey_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/survey');
        }
    });
}
exports.performDelete = performDelete;
//response page
function DisplayResponsePage(req, res, next) {
    let id = req.params.id;
    survey_1.default.findById(id, (err, surveys) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('index', { title: 'Add response', SurveysList: surveys, page: 'response' });
        }
    });
}
exports.DisplayResponsePage = DisplayResponsePage;
function ProcessResponsePage(req, res, next) {
    let userResponse = new response_1.default({
        "name": req.body.name,
        "question1": req.body.question1,
        "question1option1": req.body.question1option1,
        "question1option2": req.body.question1option2,
        "question1option3": req.body.question1option3,
        "question1option4": req.body.question1option4,
        "question2": req.body.question2,
        "question2option1": req.body.question2option1,
        "question2option2": req.body.question2option2,
        "question2option3": req.body.question2option3,
        "question2option4": req.body.question2option4,
        "question3": req.body.question3,
        "question3option1": req.body.question3option1,
        "question3option2": req.body.question3option2,
        "question3option3": req.body.question3option3,
        "question3option4": req.body.question3option4,
        "question4": req.body.question4,
        "question4option1": req.body.question4option1,
        "question4option2": req.body.question4option2,
        "question4option3": req.body.question4option3,
        "question4option4": req.body.question4option4,
        "question5": req.body.question5,
        "question5option1": req.body.question5option1,
        "question5option2": req.body.question5option2,
        "question5option3": req.body.question5option3,
        "question5option4": req.body.question5option4
    });
    response_1.default.create(userResponse, (err, response) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/survey');
        }
    });
    console.log(userResponse);
}
exports.ProcessResponsePage = ProcessResponsePage;
//# sourceMappingURL=index.js.map