import { Router } from 'express';
import { healthCheck, echo, getVersion } from '../controllers/echoController';

const router = Router();

router.get('/health', healthCheck);
router.post('/echo', echo);
router.get('/version', getVersion);

export default router;
