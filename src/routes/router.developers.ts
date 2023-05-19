import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const router = Router();

import {
    registerDeveloper,
    loginDeveloper,
    withdrawalDeveloper
} from '../controllers/developersController';

router.post('/register', registerDeveloper);
router.post('/login', loginDeveloper);
router.post('/withdrawal', AuthMiddleware, withdrawalDeveloper);

export default router;