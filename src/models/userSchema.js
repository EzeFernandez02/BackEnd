import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "firstName is mandatory"]
    },
    lastName: {
        type: String,
        required: [true, "lastName is mandatory"]
    },
    email: {
        type: String,
        required: [true, "email is mandatory"],
        unique: true,
    },
    age: {
        type: Number,
        required: [true, "age is mandatory"]
    },
    password: {
        type: String,
        required: [true, "password is mandatory"]
    }
});

export default model('User', userSchema);