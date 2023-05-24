import { Router } from "express";
import { check } from "express-validator";
import inputsValidation from "../middlewares/inputsValidatiom.js";
import { postUser } from "../controllers/userController.js";


const router = Router();

router.post('/', [
    check('firstName', 'Name is mandatory').trim().notEmpty().escape(),
    check('lastName', 'Lastname is mandatory').trim().notEmpty().escape(),
    check('email', 'Email is mandatory').trim().notEmpty().escape().isEmail(),
    check('age', "Age is mandatory").trim().notEmpty().escape(),
    check('password', "Password is mandatory").trim().notEmpty().escape(),
    inputsValidation
], postUser);

export default router;