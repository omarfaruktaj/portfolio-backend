import { Router } from 'express';
import { projectRoutes } from '../api/project';

const router = Router();

router.use('/projects', projectRoutes);
router.use('/article', projectRoutes);

export default router;
