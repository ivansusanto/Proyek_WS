import { Router } from 'express';

const router = Router();

import {
    addProduct,
    fetchProduct,
    fetchProductById,
    updateProduct
} from '../controllers/productsController';

router.post('/', addProduct);
router.get('/', fetchProduct);
router.get('/:product_id', fetchProductById);
router.put('/:product_id', updateProduct);

export default router;