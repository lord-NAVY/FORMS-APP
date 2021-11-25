import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import Survey from '../Models/survey';
import Responses from '../Models/response';
import { Callbacks } from 'jquery';
import User from '../Models/user';
// import Util Functions
import { UserDisplayName } from '../Util';
import { Alert } from 'bootstrap';

/***************************** */
/* functions for Home Page */
/***************************** */
//Display Home Page
export function DisplayHomePage(req: Request, res: Response, next: NextFunction) {
    Survey.find((err, surveyCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Survey Factory', page: 'home', 
        displayName: UserDisplayName(req), surveys: surveyCollection });
    });
    
}

//Display Survey Page
export function DisplaySurveyPage(req: Request, res: Response, next: NextFunction): void {
    Survey.find((err, surveyCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Surveys', page: 'survey', surveys: surveyCollection, displayName: UserDisplayName(req)  });
    });
}

/***************************** */
/* functions for Add Page */
/***************************** */
// Display Add Survey Page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void {
    res.render('index', { title: 'Add Survey', page: 'add', displayName: UserDisplayName(req)  });
}

// Process Add Survey Page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void {
    let newSurvey = new Survey({
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

    Survey.create(newSurvey, (err: any, Survey: any) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/survey')
        }
    })
    console.log(newSurvey);
}

/***************************** */
/* functions for Edit page */
/***************************** */
// Display Edit Survey Page
export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    Survey.findById(id, (err: any, surveys: any) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('index', { title: 'Edit Survey', SurveysList: surveys, page: 'edit', displayName: UserDisplayName(req)  });
        }
    });
}

// Process Edit Survey Page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    let updatedSurvey = new Survey
    ({
    "_id" : id,
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

    Survey.updateOne({_id : id}, updatedSurvey, (err: any) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/survey');
        }
    });
    console.log(updatedSurvey);
}

/***************************** */
/* function for deletion */
/***************************** */
//To Perform Delete
export function performDelete(req: Request, res: Response, next: NextFunction)
{
    let id = req.params.id;
    
    Survey.remove({_id: id}, (err) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             res.redirect('/survey');
        }
    });
}

/***************************** */
/* functions for Response page */
/***************************** */
// Display Response page
export function DisplayResponsePage(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    Survey.findById(id, (err: any, surveys: any) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('index', { title: 'Add response', 
            SurveysList: surveys, 
            page: 'response', 
            displayName: UserDisplayName(req)  });
        }
    });
}

// Process Response page
export function ProcessResponsePage(req: Request, res: Response, next: NextFunction): void {

    let userResponse = new Responses
    ({
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

    Responses.create(userResponse, (err: any, response: any) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/home')
        }
    })
    console.log(userResponse);
}


//SHOW USER RESPONSE PAGE
export function ShowUserResponse(req: Request, res: Response, next: NextFunction): void
{
    Responses.find((err, responseCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Responses', page: 'showResponse', ResponsesList: responseCollection, displayName: UserDisplayName(req)  });

    });
}


/***************************** */
/* functions for authentication */
/***************************** */
//Login page
export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
  
    if(!req.user){
        res.render('index', {title: "Login", page: 'login',
        messages: req.flash('loginMessage'),
        displayName: UserDisplayName(req) 
        })
    }
    else{
        return res.redirect('/');
    }
    res.render('index', {title: "Login", page: 'login'});
}

//Process Login page
export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{
   passport.authenticate('local', (err, user, info) => 
   {
    // are there any server errors?
    if(err)
    {
        console.error(err);
        return next(err);
    }

    // are there any login errors?
    if(!user)
    {
        req.flash('loginMessage', 'Authentication Error');
        return res.redirect('/login');
    }
    
    req.login(user, (err) => 
    {
        // are there db errors?
        if(err)
        {
            console.error(err);
            return next(err);
        }

        return res.redirect('/home');
    });
   })(req, res, next);
}
// Display Register Page
export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        return res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req)   });
    }

    return res.redirect('/');
}    

//Process Register Page
export function ProcessRegisterPage(req: Request, res:Response, next: NextFunction): void
{
    // instructions for new User object
    let newUser = new User
    ({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName
    });
    
    User.register(newUser, req.body.password, (err) =>{
        if(err)
        {
            console.error('Error: Inserting New User');
            if(err.name == "UserExistsError")
            {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');

            return res.redirect('/register');
        }

        // after successful registration - lets login the user
        return passport.authenticate('local')(req,res, () =>
        {
            return res.redirect('/survey');
        });
    });
}

// Logout page
export function ProcessLogOutPage(req: Request, res:Response, next: NextFunction): void
{
    req.logOut();
    
    res.redirect('/login');
}