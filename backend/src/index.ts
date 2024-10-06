import express from 'express'
import router from './routes';
import fileUpload from 'express-fileupload'
import cloudinaryConnect from './config/cloudinary';
import autoDelete from './utils/cron';
const app = express();

app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
    limits: { fileSize: 50 * 1024 * 1024 }
}));

//cloudinary connect
cloudinaryConnect();

//auto delete activate
autoDelete();

app.use('/api/v1',router)

app.get("/",(req,res) => {
    res.json({
        message:"Server is running"
    })
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

