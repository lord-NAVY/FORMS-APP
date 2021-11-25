"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
//instantiate an object of type index controller
const index_1 = require("../Controllers/index");
/* GET home page. */
router.get('/home', index_1.DisplayHomePage);
/* GET home page. */
router.get('/', index_1.DisplayHomePage);
/* GET landing page. */
router.get('/survey', index_1.DisplaySurveyPage);
/* GET add survey page. */
router.get('/add', index_1.DisplayAddPage);
/* Process add survey page. */
router.post('/add', index_1.ProcessAddPage);
/* GET  edit survey page. */
router.get('/edit/:id', index_1.DisplayEditPage);
/* Process  edit survey page. */
router.post('/edit/:id', index_1.ProcessEditPage);
/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', index_1.performDelete);
/* GET response page. */
router.get('/response/:id', index_1.DisplayResponsePage);
/* Process response page. */
router.post('/response/:id', index_1.ProcessResponsePage);
/*Show User Response page */
router.get('/showResponse', index_1.ShowUserResponse);
/* GET login page. */
router.get('/login', index_1.DisplayLoginPage);
/* POST process login page */
router.post('/login', index_1.ProcessLoginPage);
/* GET register page. */
router.get('/register', index_1.DisplayRegisterPage);
/* POST process register page */
router.post('/register', index_1.ProcessRegisterPage);
/* GET logout page */
router.get('/logout', index_1.ProcessLogOutPage);
//module.exports = router;
//# sourceMappingURL=index.js.map