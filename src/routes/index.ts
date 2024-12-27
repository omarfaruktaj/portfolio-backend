import { Router } from 'express';
import { analyticsRoutes } from '../api/analytics';
import { articleRoutes } from '../api/article';
import { projectRoutes } from '../api/project';

const router = Router();

router.use('/projects', projectRoutes);
router.use('/article', articleRoutes);
router.use('/analytics', analyticsRoutes);

export default router;
