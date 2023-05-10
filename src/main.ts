import express from 'express';
import apiRouter from './routes/index.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

const port: number = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));