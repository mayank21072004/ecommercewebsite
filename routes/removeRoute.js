import express from 'express';
import Product from '../models/Product.js';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.post('/removeproduct', async (req, res) => {
    try {
        // Find and delete the product by id
        const deletedProduct = await Product.findOneAndDelete({ id: req.body.id });

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        // Construct the file path
        const filePath = path.resolve('uploads', deletedProduct.image);

        // Delete the file from the server
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
                return res.status(500).json({ message: 'Failed to delete product image' });
            }
            console.log('File Path:', filePath);

            // Respond with the deleted product's image
            res.json({ message: 'Product and image deleted successfully', image: deletedProduct.image });
        });
    } catch (error) {
        // Handle any errors and respond with an error message
        console.error('Error removing product:', error);
        res.status(500).json({ message: 'Failed to remove product' });
    }
});

export default router;
