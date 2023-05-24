import { Router } from "express";
import { check } from "express-validator";
import inputsValidation from "../middlewares/inputsValidatiom.js";
import { login, logout } from "../controllers/sessionController.js";

const router = Router();

router.post('/login', [
    check('email', 'Email is mandatory').trim().notEmpty().escape().isEmail(),
    check('password', 'Password is mandatory').trim().notEmpty().escape(),
    inputsValidation
], login);

router.post('/logout', logout);

export default router;