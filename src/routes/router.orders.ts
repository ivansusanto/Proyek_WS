import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const router = Router();

import {
    checkoutOrder,
    paymentOrder,
    fetchOrders,
    fetchOrderById,
    fetchUserOrder,
    syncOrderStatus
} from '../controllers/ordersController';

router.post('/sync', syncOrderStatus);
router.use(AuthMiddleware);
router.post('/checkout', checkoutOrder);
router.post('/payment', paymentOrder);
router.get('/', fetchOrders);
router.get('/:invoice/details', fetchOrderById);
router.get('/:customer_id', fetchUserOrder);

export default router;