import { Config } from './types.js';

// Development environment specific overrides
const developmentConfig: Partial<Config> = {
  logging: {
    level: 'debug',
  },
  // Add other development-specific settings here
};

export default developmentConfig;
