import multer from 'multer';
import path from 'path';

let uploadCount = 0;

// Define storage for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination directory
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}_${file.originalname}`;
        cb(null, fileName);
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });
export { upload };