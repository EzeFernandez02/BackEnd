import mongoose from "mongoose";

class DbConnection {

    static #instance;

    constructor() { }

    static getInstance() {
        if (this.#instance === undefined) this.#instance = new DbConnection();
        return this.#instance;
    }

    async connect() {
        try {
            const { MONGO_DB_URI, MONGO_DB_NAME } = process.env;
            const url = `${MONGO_DB_URI}${MONGO_DB_NAME}`;
            await mongoose.connect(url);
            console.log('Connected Database', MONGO_DB_NAME);
        } catch (error) {
            console.error(error);
            throw new Error('Database connection error');
        }
    }
}

const dbConnection = DbConnection.getInstance();
export default dbConnection;