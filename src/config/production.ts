import { Config } from './types.js';

// Production environment specific overrides
const productionConfig: Partial<Config> = {
  logging: {
    level: 'warn',
  },
  // Add other production-specific settings here
};

export default productionConfig;
