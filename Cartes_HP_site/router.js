import express from 'express'
import agents from './routes/AgentsRoutes.js';
import authRoutes from './routes/AuthRoutes.js';
import userRoutes from './routes/UserRoutes.js';

const router = express.Router()


router.use('/:agents', agents)
router.use("/auth", authRoutes)
router.use('/user', userRoutes)

export default router;