import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Route to get all products
router.get('/allproducts', async (req, res) => {
    try {
        // Fetch all products from the database
        const allProducts = await Product.find({});
        res.json(allProducts);
    } catch (error) {
        // Handle any errors and respond with an error message
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Failed to fetch products' });
    }
});

export default router;
