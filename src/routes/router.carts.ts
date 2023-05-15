import { Router } from 'express';

const router = Router();

import {
    addCart,
    fetchCart,
    updateCart,
    deleteCart
} from '../controllers/cartsController';

router.post('/', addCart);
router.get('/:customer_id', fetchCart);
router.put('/:customer_id/:product_id', updateCart);
router.delete('/:customer_id/:product_id', deleteCart);

export default router;