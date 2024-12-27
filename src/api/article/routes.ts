import { Router } from 'express';
import validateRequest from '../../middleware/validate-request';
import { articleSchema } from '../../schemas';
import {
  createArticle,
  deleteArticleById,
  getAllArticles,
  getArticleById,
  updateArticleById,
} from './controllers';

const router = Router();

router
  .route('/')
  .post(validateRequest(articleSchema), createArticle)
  .get(getAllArticles);

router
  .route('/:id')
  .get(getArticleById)
  .put(validateRequest(articleSchema), updateArticleById)
  .delete(deleteArticleById);

export default router;
