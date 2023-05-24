import { Router } from "express";
import { check } from "express-validator";
import inputsValidation from "../middlewares/inputsValidatiom.js";
import { getCartById, postCart, postProductByCartId, deleteCart, deleteItem, putProductByCartId, putProductsByCartId } from "../controllers/cartController.js";

const router = Router();

router.get('/:cid', [
    check('cid', 'It is not a valid ID').isMongoId(),
    check('cid').escape(),
    inputsValidation
], getCartById);

router.post('/', [
    check('products.*.id', "It is not a valid ID").isMongoId(),
    check("products.*.quantity", "Quantity is required").notEmpty(),
    check("products.*.quantity", "Quantity must be  higher than 0").isInt({ min: 1 }),
    inputsValidation
], postCart);

router.post('/:cid/product/:pid', [
    check('cid', 'It is not a valid ID').isMongoId(),
    check('cid').escape(),
    check('products.*.id', "It is not a valid ID").isMongoId(),
    check("products.*.quantity", "Quantity is required").notEmpty(),
    check("products.*.quantity", "Quantity must be  higher than 0").isInt({ min: 1 }),
    inputsValidation
], postProductByCartId);

router.delete('/:cid', [
    check('cid', 'It is not a valid ID').isMongoId(),
    check('cid').escape(),
    inputsValidation
], deleteCart);

router.delete('/:cid/product/:pid', [
    check('cid', 'It is not a valid ID').isMongoId(),
    check('cid').escape(),
    check('products.*._id', "It is not a valid ID").isMongoId(),
    inputsValidation,
], deleteItem);

router.put('/:cid', [
    check('cid', 'It is not a valid ID').isMongoId(),
    check('cid').escape(),
    check('products.*.id', "It is not a valid ID").isMongoId(),
    check("products.*.quantity", "Quantity is required").notEmpty(),
    check("products.*.quantity", "Quantity must be  higher than 0").isInt({ min: 1 }),
    inputsValidation
], putProductsByCartId);

router.put('/:cid/product/:pid', [
    check('cid', 'It is not a valid ID').isMongoId(),
    check('cid').escape(),
    check('products.*.id', "It is not a valid ID").isMongoId(),
    check("products.*.quantity", "Quantity is required").notEmpty(),
    check("products.*.quantity", "Quantity must be  higher than 0").isInt({ min: 1 }),
    inputsValidation
], putProductByCartId);


export default router;