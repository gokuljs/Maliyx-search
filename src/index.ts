import express, { Request, Response, RequestHandler } from 'express';
import config from './config/index.js';

const app = express();
const PORT = config.port;

app.use(express.json());

const rootHandler: RequestHandler = (_req, res) => {
  res.json({
    message: 'Mailyx Search API is running',
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
