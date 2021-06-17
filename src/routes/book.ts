import express from 'express';
import controller from '../controllers/book';

const router = express.Router();

/** get resquest to controller  */
router.get('/getallbooks', controller.getAllBooks);

export default router;