import { Router } from 'express';

const router = Router();

import {
    registerDeveloper,
    loginDeveloper
} from '../controllers/developersController';

router.post('/register', registerDeveloper);
router.post('/login', loginDeveloper);

export default router;