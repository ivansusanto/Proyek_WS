import { Router } from 'express';
import MulterUpload from '../validations/Multer';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const router = Router();
const upload = MulterUpload;

import {
    addProduct,
    fetchProduct,
    fetchProductById,
    updateProduct
} from '../controllers/productsController';

router.post('/', [upload.single('image'), AuthMiddleware], addProduct);
router.get('/', fetchProduct);
router.get('/:product_id', fetchProductById);
router.put('/:product_id', [upload.single('image'), AuthMiddleware], updateProduct);

export default router;