import express, { Request, Response } from 'express';
import apiRouter from './routes/index.routes';
import { StatusCode } from './utils/StatusCode';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.all('*', (req: Request, res: Response) => {
    return res.status(StatusCode.NOT_FOUND).json({
        message: 'Hayooo ngapain',
    });
});

const port: number = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));