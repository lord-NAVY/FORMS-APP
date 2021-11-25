"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogOutPage = exports.ProcessRegisterPage = exports.DisplayRegisterPage = exports.ProcessLoginPage = exports.DisplayLoginPage = exports.ShowUserResponse = exports.ProcessResponsePage = exports.DisplayResponsePage = exports.performDelete = exports.ProcessEditPage = exports.DisplayEditPage = exports.ProcessAddPage = exports.DisplayAddPage = exports.DisplaySurveyPage = exports.DisplayHomePage = void 0;
const passport_1 = __importDefault(require("passport"));
const survey_1 = __importDefault(require("../Models/survey"));
const response_1 = __importDefault(require("../Models/response"));
const user_1 = __importDefault(require("../Models/user"));
// import Util Functions
const Util_1 = require("../Util");
/***************************** */
/* functions for Home Page */
/***************************** */
//Display Home Page
function DisplayHomePage(req, res, next) {
    survey_1.default.find((err, surveyCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Survey Factory', page: 'home',
            displayName: (0, Util_1.UserDisplayName)(req), surveys: surveyCollection });
    });
}
exports.DisplayHomePage = DisplayHomePage;
//Display Survey Page
function DisplaySurveyPage(req, res, next) {
    survey_1.default.find((err, surveyCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Surveys', page: 'survey', surveys: surveyCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplaySurveyPage = DisplaySurveyPage;
/***************************** */
/* functions for Add Page */
/***************************** */
// Display Add Survey Page
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add Survey', page: 'add', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
// Process Add Survey Page
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
/***************************** */
/* functions for Edit page */
/***************************** */
// Display Edit Survey Page
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    survey_1.default.findById(id, (err, surveys) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('index', { title: 'Edit Survey', SurveysList: surveys, page: 'edit', displayName: (0, Util_1.UserDisplayName)(req) });
        }
    });
}
exports.DisplayEditPage = DisplayEditPage;
// Process Edit Survey Page
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
/***************************** */
/* function for deletion */
/***************************** */
//To Perform Delete
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
/***************************** */
/* functions for Response page */
/***************************** */
// Display Response page
function DisplayResponsePage(req, res, next) {
    let id = req.params.id;
    survey_1.default.findById(id, (err, surveys) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('index', { title: 'Add response',
                SurveysList: surveys,
                page: 'response',
                displayName: (0, Util_1.UserDisplayName)(req) });
        }
    });
}
exports.DisplayResponsePage = DisplayResponsePage;
// Process Response page
function ProcessResponsePage(req, res, next) {
    let userResponse = new response_1.default({
        "name": req.body.name,
        "question1": req.body.question1,
        //"answer1": req.body.answer1,
        "question2": req.body.question2,
        // "answer2": req.body.answer2,
        "question3": req.body.question3,
        //"answer3": req.body.answer3,
        "question4": req.body.question4,
        //"answer4": req.body.answer4,
        "question5": req.body.question5,
        //"answer5": req.body.answer5
    });
    response_1.default.create(userResponse, (err, response) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/home');
        }
    });
    console.log(userResponse);
}
exports.ProcessResponsePage = ProcessResponsePage;
//SHOW USER RESPONSE PAGE
function ShowUserResponse(req, res, next) {
    response_1.default.find((err, responseCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Responses', page: 'showResponse', ResponsesList: responseCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.ShowUserResponse = ShowUserResponse;
/***************************** */
/* functions for authentication */
/***************************** */
//Login page
function DisplayLoginPage(req, res, next) {
    if (!req.user) {
        res.render('index', { title: "Login", page: 'login',
            messages: req.flash('loginMessage'),
            displayName: (0, Util_1.UserDisplayName)(req)
        });
    }
    else {
        return res.redirect('/');
    }
    res.render('index', { title: "Login", page: 'login' });
}
exports.DisplayLoginPage = DisplayLoginPage;
//Process Login page
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate('local', (err, user, info) => {
        // are there any server errors?
        if (err) {
            console.error(err);
            return next(err);
        }
        // are there any login errors?
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // are there db errors?
            if (err) {
                console.error(err);
                return next(err);
            }
            return res.redirect('/home');
        });
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
// Display Register Page
function DisplayRegisterPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: (0, Util_1.UserDisplayName)(req) });
    }
    return res.redirect('/');
}
exports.DisplayRegisterPage = DisplayRegisterPage;
//Process Register Page
function ProcessRegisterPage(req, res, next) {
    // instructions for new User object
    let newUser = new user_1.default({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error('Error: Inserting New User');
            if (err.name == "UserExistsError") {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');
            return res.redirect('/register');
        }
        // after successful registration - lets login the user
        return passport_1.default.authenticate('local')(req, res, () => {
            return res.redirect('/survey');
        });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
// Logout page
function ProcessLogOutPage(req, res, next) {
    req.logOut();
    res.redirect('/login');
}
exports.ProcessLogOutPage = ProcessLogOutPage;
//# sourceMappingURL=index.js.map