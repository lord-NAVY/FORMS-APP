import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();
export default router;

import Survey from '../Models/survey';
import Responses from '../Models/response';
import User from '../Models/user';

//instantiate an object of type index controller
import {  DisplayAddPage, DisplayEditPage, DisplaySurveyPage, performDelete, ProcessAddPage, ProcessEditPage,DisplayResponsePage, ProcessResponsePage, DisplayLoginPage, ProcessLoginPage, ShowUserResponse, DisplayRegisterPage, ProcessRegisterPage, ProcessLogOutPage, DisplayHomePage } from '../Controllers/index';
/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET landing page. */
router.get('/survey', DisplaySurveyPage);

/* GET add survey page. */
router.get('/add', DisplayAddPage);

/* Process add survey page. */
router.post('/add', ProcessAddPage);

/* GET  edit survey page. */
router.get('/edit/:id', DisplayEditPage);

/* Process  edit survey page. */
router.post('/edit/:id', ProcessEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', performDelete);

/* GET response page. */
router.get('/response/:id', DisplayResponsePage);

/* Process response page. */
router.post('/response/:id', ProcessResponsePage);

/*Show User Response page */
router.get('/showResponse', ShowUserResponse);

/* GET login page. */
router.get('/login', DisplayLoginPage);

/* POST process login page */
router.post('/login', ProcessLoginPage);

/* GET register page. */
router.get('/register',DisplayRegisterPage);

/* POST process register page */
router.post('/register',ProcessRegisterPage);

/* GET logout page */
router.get('/logout', ProcessLogOutPage);
//module.exports = router;
