import { ObjectId } from "mongodb";
import { Schema, model, } from "mongoose";

const cartSchema = new Schema({
    products: {
        type: [{
            id: {
                type: ObjectId,
                required: [true, "The product ID is mandatory"],
                ref: 'Product',
            },
            quantity: {
                type: Number,
                required: [true, "quantity required"],
            },
        }],
        required: [true, "At least there has to be a product"]
    }
});

export default model('Cart', cartSchema);