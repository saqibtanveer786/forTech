// multer.js
import multer from 'multer';
import path from 'path';

// Define storage settings for Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'storage/images');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const extension = path.extname(file.originalname);
        cb(null, uniqueSuffix + extension);
    },
});

// Define file filter to accept only image files
const fileFilter = (req, file, cb) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const fileExtension = path.extname(file.originalname).toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only image files are allowed.'), false);
    }
};

// Initialize Multer with the storage and file filter settings
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5, // Limit file size to 5MB (adjust as needed)
    },
});

export default upload;
