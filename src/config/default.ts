import { Config } from './types.js';

// Base configuration (common for all environments)
const defaultConfig: Config = {
  port: Number(process.env.PORT) || 3000,
  environment: process.env.NODE_ENV || 'development',
  elasticSearch: {
    url: process.env.ELASTIC_SEARCH_URL || 'http://localhost:9200',
    apiKey: process.env.ELASTIC_SEARCH_API_KEY,
  },
  logging: {
    level: 'info',
  },
};

export default defaultConfig;
