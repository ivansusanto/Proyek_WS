import { Router } from 'express';
import MulterUpload from '../validations/Multer';

const router = Router();
const upload = MulterUpload;

import {
    addProduct,
    fetchProduct,
    fetchProductById,
    updateProduct
} from '../controllers/productsController';

router.post('/', upload.single('image'), addProduct);
router.get('/', fetchProduct);
router.get('/:product_id', fetchProductById);
router.put('/:product_id', upload.single('image'), updateProduct);

export default router;