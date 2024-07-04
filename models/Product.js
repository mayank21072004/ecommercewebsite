import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    old_price:{
        type: Number,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    available:{
        type:Boolean,
        default:true,

    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
