import { Router } from 'express';
import {
  findTasks,
  findTaskById,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/task.controller';
import checkAuth from '../middlewares/authenticate';

export default Router()
  .get('/task', findTasks)
  .get('/task/:id', findTaskById)
  .post('/task', checkAuth, createTask)
  .put('/task/:id', checkAuth, updateTask)
  .delete('/task/:id', checkAuth, deleteTask);
