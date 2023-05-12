import express from 'express';
import cartsRouter from './router.carts';
import developersRouter from './router.developers';
import ordersRouter from './router.orders';
import productsRouter from './router.products';
import usersRouter from './router.users';
import { AuthMiddleware } from '../middlewares/xAuthMiddleware';

const apiRouter = express.Router();

apiRouter.use('/developers', developersRouter);

apiRouter.use(AuthMiddleware);
apiRouter.use('/carts', cartsRouter);
apiRouter.use('/orders', ordersRouter);
apiRouter.use('/products', productsRouter);
apiRouter.use('/users', usersRouter);

export default apiRouter;