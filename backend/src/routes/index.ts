// routes/uploadRoutes.js
import express from 'express';
import { getFile, uploadFile } from '../controller/file';


const router = express.Router();

console.log("Inside router")



// Route to upload a file
router.post('/upload', uploadFile);
router.get('/upload/:fileId',getFile);

export default router;
