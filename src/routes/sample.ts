import express from 'express';
import controller from '../controllers/sample';

const router = express.Router();

/** get resquest to controller  */
router.get('/ping', controller.serverHealthCheck);

export default router;