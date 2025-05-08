import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import defaultConfig from './default.js';
import developmentConfig from './development.js';
import productionConfig from './production.js';
import { Config } from './types.js';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine which config to use based on NODE_ENV
const environment = process.env.NODE_ENV || 'development';
const environmentConfigs: Record<string, Partial<Config>> = {
  development: developmentConfig,
  production: productionConfig,
};

// Create the final config by merging default config with environment-specific config
const environmentConfig = environmentConfigs[environment] || {};

const config: Config = {
  ...defaultConfig,
  ...environmentConfig,
  // Ensure environment is always set correctly
  environment,
};

export default config;
