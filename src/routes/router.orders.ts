import { Router } from 'express';

const router = Router();

import {
    checkoutOrder,
    paymentOrder,
    fetchOrders,
    fetchOrderById,
    fetchUserOrder
} from '../controllers/ordersController';

router.post('/checkout', checkoutOrder);
router.post('/payment', paymentOrder);
router.get('/', fetchOrders);
router.get('/:order_id', fetchOrderById);
router.get('/:customer_id', fetchUserOrder);

export default router;