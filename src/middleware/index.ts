import express, { Express } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const applyMiddleware = (app: Express) => {
  app.use(helmet());
  app.use(express.json());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 100,
      message: 'Too many requests, please try again later.',
    }),
  );
};

export default applyMiddleware;
