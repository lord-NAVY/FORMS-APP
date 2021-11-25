import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import Survey from '../Models/survey';
import response from '../Models/response';
import { Callbacks } from 'jquery';

