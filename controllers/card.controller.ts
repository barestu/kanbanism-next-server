import { Request, Response } from 'express';
import Card from '../models/Card.model';

export const findCards = (_: Request, res: Response) => {
  Card.findAll()
    .then(cards => res.json({ data: cards }))
    .catch(() => res.status(404).send({ data: [] }));
}

export const findCardById = (req: Request, res: Response) => {
  Card.findByPk(req.params.id)
    .then(card => res.json({ data: card }))
    .catch(() => res.status(404).send({ data: {} }));
}

export const createCard = (req: Request, res: Response) => {
  Card.create(req.body)
    .then(card => res.json({ data: card }))
    .catch(() => res.status(404).send({ data: {} }));
}
