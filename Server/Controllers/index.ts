import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import Survey from '../Models/survey';
import Responses from '../Models/response';
import { Callbacks } from 'jquery';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction) {
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplaySurveyPage(req: Request, res: Response, next: NextFunction): void {
    Survey.find((err, surveyCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Surveys', page: 'survey', surveys: surveyCollection });

    });
}

export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void {
    res.render('index', { title: 'Add Survey', page: 'add' });
}


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



export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    Survey.findById(id, (err: any, surveys: any) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('index', { title: 'Edit Survey', SurveysList: surveys, page: 'edit' });
        }
    });
}

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


//response page
export function DisplayResponsePage(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    Survey.findById(id, (err: any, surveys: any) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('index', { title: 'Add response', SurveysList: surveys, page: 'response' });
        }
    });
}


export function ProcessResponsePage(req: Request, res: Response, next: NextFunction): void {

    let userResponse = new Responses
    ({
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

    Responses.create(userResponse, (err: any, response: any) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/survey')
        }
    })
    console.log(userResponse);
}