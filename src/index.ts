import express from 'express';
import developersRouter from './routes/router.developers';
import usersRouter from './routes/router.users';
import productsRouter from './routes/router.products';
import cartsRouter from './routes/router.carts';
import ordersRouter from './routes/router.orders';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/developers', developersRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/orders', ordersRouter);

const port : number = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));