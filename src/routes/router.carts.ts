import { Router } from 'express';

const router = Router();

import {
    addCart,
    fetchCart,
    updateCart,
    deleteCart
} from '../controllers/cartsController';

router.post('/', addCart);
router.get('/:user_id', fetchCart);
router.put('/:product_id', updateCart);
router.delete('/:product_id', deleteCart);

export default router;