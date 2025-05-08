import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Config } from './types.js';

// Determine environment
const environment = process.env.NODE_ENV || 'development';

// Load environment variables from appropriate .env file
dotenv.config({
  path: path.resolve(process.cwd(), `.env.${environment}`),
});

// Fall back to .env if environment-specific file doesn't exist
dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
  override: false,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create config directly from environment variables
const config: Config = {
  port: Number(process.env.PORT) || 3000,
  environment,
  elasticSearch: {
    url: process.env.ELASTIC_SEARCH_URL || 'http://localhost:9200',
    apiKey: process.env.ELASTIC_SEARCH_API_KEY,
  },
  logging: {
    level: process.env.LOG_LEVEL || (environment === 'production' ? 'warn' : 'debug'),
  },
};

export default config;
