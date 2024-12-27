import { Router } from 'express';
import {
  createOrUpdateAnalytics,
  deleteAnalyticsByPage,
  getAllAnalytics,
  getAnalyticsByPage,
} from './controllers';

const router = Router();
router.post('/:page', createOrUpdateAnalytics);

router.get('/:page', getAnalyticsByPage);

router.get('/', getAllAnalytics);

router.delete('/:page', deleteAnalyticsByPage);

export default router;
