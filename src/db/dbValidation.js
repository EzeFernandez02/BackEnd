import ProductManager from "../managers/productManager.js";
import CartManager from "../managers/cartManager.js";

export const codeExist = async (code = "") => {
    try {
        const manager = new ProductManager();
        const isExist = await manager.getOneCode(code);
        if (isExist) throw new Error(`The code ${code} already exists`);
    } catch (error) {
        throw error;
    }
};

export const productExist = async (id = "") => {
    try {
        const manager = new ProductManager();
        const isExist = await manager.getOne(id);
        if (!isExist) throw new Error(`The product with the id ${id} does not exist or has not been found`);
    } catch (error) {
        throw error;
    }
};

export const cartExist = async (id = "") => {
    try {
        const manager = new CartManager();
        const isExist = await manager.getOne(id);
        if (!isExist) throw new Error(`The cart with the id ${id} does not exist`);
    } catch (error) {
        throw error;
    }
};