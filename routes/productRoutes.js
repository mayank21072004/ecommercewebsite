import express from 'express';
import Product from '../models/Product.js';
import { upload } from '../config/multer.js';

const router = express.Router();

// Route to add a new product
router.post('/addproduct', upload.single('image'), async (req, res) => {
    try {
        // Find the product with the highest id
        const lastProduct = await Product.findOne().sort({ id: -1 });

        // Calculate the new product id
        const newProductId = lastProduct ? lastProduct.id + 1 : 1;

        const newProduct = new Product({
            id: newProductId,
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename, // Multer should save the filename
            category: req.body.category,
            old_price:req.body.old_price,
            new_price:req.body.new_price
        });

        // Save the new product to the database
        const savedProduct = await newProduct.save();

        // Respond with the saved product as JSON
        res.json('ok');
    } catch (error) {
        // Handle any errors and respond with an error message
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Failed to add product' });
    }
});

export default router;
