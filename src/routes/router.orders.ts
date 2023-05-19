import { Router } from 'express';

const router = Router();

import {
    checkoutOrder,
    paymentOrder,
    fetchOrders,
    fetchOrderById,
    fetchUserOrder,
    syncOrderStatus
} from '../controllers/ordersController';

router.post('/checkout', checkoutOrder);
router.post('/payment', paymentOrder);
router.get('/', fetchOrders);
router.get('/:invoice/details', fetchOrderById);
router.get('/:customer_id', fetchUserOrder);
router.post('/sync', syncOrderStatus);

export default router;