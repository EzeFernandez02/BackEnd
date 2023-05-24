import { Router } from "express";
import { check } from "express-validator";
import inputsValidation from "../middlewares/inputsValidatiom.js";
import { getProducts, getProductById, postProduct, putProduct, deleteProduct } from "../controllers/productController.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.get('/', getProducts);

router.get('/:pid', [
    check('pid', 'It is not a valid ID').isMongoId(),
    check('pid').escape(),
    inputsValidation
], getProductById);

router.post('/', [
    check('title', 'Title is mandatory').trim().notEmpty().escape(),
    check('description', 'Description is mandatory').trim().notEmpty().escape(),
    check('code', 'Code is mandatory').trim().notEmpty().escape(),
    check('stock', 'Stock is mandatory').trim().escape(),
    check('category', 'Category is mandatory').trim().notEmpty().escape(),
    inputsValidation
], postProduct);

router.put('/:pid', [
    check('pid', 'It is not a valid ID').isMongoId(),
    check('pid').escape(),
    check('title', 'Title is mandatory').trim().notEmpty().escape(),
    check('description', 'Description is mandatory').trim().notEmpty().escape(),
    check('code', 'Code is mandatory').notEmpty().escape(),
    check('stock', 'Stock is mandatory').notEmpty().escape(),
    check('category', 'Category is mandatory').trim().notEmpty().escape(),
    inputsValidation
], putProduct);

router.delete('/:pid', [
    auth,
    check('pid', 'It is not a valid ID').isMongoId(),
    check('pid').escape(),
    inputsValidation
], deleteProduct);

export default router;