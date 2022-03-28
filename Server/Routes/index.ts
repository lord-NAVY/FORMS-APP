import express from 'express';
const router = express.Router();
export default router;

import Survey from '../Models/survey';
import response from '../Models/response';

//instantiate an object of type index controller
import { DisplayAddPage, DisplayEditPage, DisplaySurveyPage, performDelete, ProcessAddPage, ProcessEditPage, DisplayResponsePage, ProcessResponsePage } from '../Controllers/index';
//import { DisplayResponsePage, ProcessResponsePage } from '../Controllers/response';

/* GET home page. */
router.get('/', DisplaySurveyPage);

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

/* Porcess response page. */
router.post('/response/:id', ProcessResponsePage);

//module.exports = router;
