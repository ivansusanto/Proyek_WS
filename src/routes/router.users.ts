import { Router } from 'express';

const router = Router();

import {
    addUser,
    updateStatus
} from '../controllers/usersController';

router.post('/', addUser);
router.put('/:customer_id', updateStatus);

export default router;