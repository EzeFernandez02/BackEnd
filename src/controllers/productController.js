import { request, response } from "express";
import ProductManager from "../managers/productManager.js";


export const getProducts = async (req = request, res = response) => {
    try {
        const paginate = req.query;
        const manager = new ProductManager();
        const result = await manager.getAll(paginate);
        res.send({ status: "success", ...result });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

export const getProductById = async (req = request, res = response) => {
    try {
        const { pid } = req.params;
        const manager = new ProductManager();
        const result = await manager.getOne(pid);
        res.send(result);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
};

export const postProduct = async (req = request, res = response) => {
    try {
        const { body } = req;
        const manager = new ProductManager();
        const result = await manager.create(body);
        res.status(201).send({ msg: "Product created", result });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

export const putProduct = async (req = request, res = response) => {
    try {
        const { pid } = req.params;
        const { id, ...rest } = req.body;
        const manager = new ProductManager();
        const result = await manager.update(pid, rest);

        res.send({ msg: "Updated product", result });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

export const deleteProduct = async (req = request, res = response) => {
    try {
        const { pid } = req.params;
        const manager = new ProductManager();
        const result = await manager.delete(pid);

        res.send({ msg: "Deleted product", result });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}