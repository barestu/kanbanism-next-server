import { Request, Response } from 'express';
import Task from '../models/Task.model';

export const findTasks = async (_: Request, res: Response) => {
  try {
    const tasks = await Task.findAll();
    res.send({
      status: 'success',
      data: tasks,
    });
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: 'Server error',
    });
  }
};

export const findTaskById = async (req: Request, res: Response) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      res.status(404).send({
        status: 'error',
        message: 'Not found',
      });
    }

    res.send({
      status: 'success',
      data: task,
    });
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: 'Server error',
    });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, statusId } = req.body;
    const task = await Task.create({
      title,
      description,
      statusId,
      creatorId: req.user?.id,
    });
    res.send({
      status: 'success',
      data: task,
    });
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: 'Server error',
      error,
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.send({
      status: 'success',
      data: task,
    });
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: 'Server error',
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    await Task.destroy({ where: { id: req.params.id }});
    res.send({
      status: 'success',
      data: {},
    });
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: 'Server error',
    });
  }
};
