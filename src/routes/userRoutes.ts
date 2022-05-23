import { Router } from 'express';
import UserController from '../controllers/userController';
import { classeVal, levelVal, passwordVal, usernameVal } from '../middlewares/userMidd';

const route = Router();

const userController = new UserController();

route.post(
  '/', 
  usernameVal,
  classeVal,
  levelVal,
  passwordVal,
  userController.create,
);

export default route;
