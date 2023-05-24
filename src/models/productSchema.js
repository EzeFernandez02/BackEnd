import { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2'

const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is mandatory'],
    },
    description: {
        type: String,
        required: [true, 'Description is mandatory'],
    },
    code: {
        type: String,
        required: [true, 'Code is mandatory'],
        unique: true,
    },
    price: {
        type: Number,
        required: [true, 'Price is mandatory'],
    },
    status: {
        type: Boolean,
        default: true,
    },
    stock: {
        type: Number,
        required: [true, "Stock is mandatory"],
    },
    category: {
        type: String,
        required: [true, 'Category is mandatory'],
    },
    thumbnail: {
        type: [String],
    }

});
ProductSchema.plugin(paginate);

export default model('Product', ProductSchema);