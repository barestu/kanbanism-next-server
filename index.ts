import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './services/database';
import cardRouter from './router/card.router';

const app = express();
const PORT = 8000;

(async () => {
  await sequelize.sync({ force: false });

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());

  app.get('/', (_, res) => {
    res.send('It\'s working!');
  });

  app.use('/api/v1', cardRouter);

  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
})();
