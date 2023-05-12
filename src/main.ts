import express from 'express';
import multer from 'multer';
import apiRouter from './routes/index.routes';

const app = express();

const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', upload.single('file'), apiRouter);

const port: number = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));