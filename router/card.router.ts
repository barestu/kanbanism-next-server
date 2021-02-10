import { Router } from 'express';
import { findCards, findCardById, createCard } from '../controllers/card.controller';

export default Router()
  .get('/card', findCards)
  .get('/card/:id', findCardById)
  .post('/card', createCard);
