// routes/astrologer.routes.js
import express from 'express';
import { AstrologerController } from '../controllers/astrologer.controller';

const router = express.Router();
const astrologerController = new AstrologerController();

router.post('/distribute-flow', astrologerController.distributeFlow);
router.post('/toggle-top-astrologer-flow', astrologerController.toggleTopAstrologerFlow);

export default router;