import express from 'express';
import cartsRouter from './router.carts';
import developersRouter from './router.developers';
import ordersRouter from './router.orders';
import productsRouter from './router.products';
import usersRouter from './router.users';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const apiRouter = express.Router();

apiRouter.use('/assets', express.static('./uploads'));
apiRouter.use('/developers', developersRouter);
apiRouter.use('/orders', ordersRouter);

apiRouter.use(AuthMiddleware);
apiRouter.use('/carts', cartsRouter);
apiRouter.use('/products', productsRouter);
apiRouter.use('/users', usersRouter);

export default apiRouter;