import express, { Request, Response, RequestHandler } from 'express';
import config from './config/index.js';
import { clerkMiddleware } from '@clerk/express';

const app = express();
const PORT = config.port;
app.use(clerkMiddleware());
app.use(express.json());

const rootHandler: RequestHandler = (_req, res) => {
  console.log('rootHandler');
  res.json({
    message: 'test api',
    environment: config.environment,
  });
};
app.get('/', rootHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${config.environment}`);
  console.log(`Search example: http://localhost:${PORT}/api/search?q=project`);
});
