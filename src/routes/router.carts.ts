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
router.put('/:user_id/:product_id', updateCart);
router.delete('/:user_id/:product_id', deleteCart);

export default router;