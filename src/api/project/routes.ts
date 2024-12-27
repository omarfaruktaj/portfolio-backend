import { Router } from 'express';
import validateRequest from '../../middleware/validate-request';
import { projectSchema } from '../../schemas';
import {
  createProject,
  deleteProjectById,
  getAllProjects,
  getProjectById,
  updateProjectById,
} from './controllers';

const router = Router();

router
  .route('/')
  .post(validateRequest(projectSchema), createProject)
  .get(getAllProjects);

router
  .route('/:id')
  .get(getProjectById)
  .put(validateRequest(projectSchema), updateProjectById)
  .delete(deleteProjectById);

export default router;
