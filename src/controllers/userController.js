import { request, response } from "express";
import UserManager from "../managers/userManager.js";
import { createHash } from "../helpers/dbValidators.js";

export const postUser = async (req = request, res = response) => {
    try {
        const { body } = req;
        const manager = new UserManager();

        const dto = {
            ...body,
            password: await createHash(body.password, 10)
        }
        const user = await manager.create(dto);
        res.send({ status: "sucess", msg: "User created", user });

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}