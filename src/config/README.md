# Configuration

This folder contains the configuration setup for the application, supporting different environments (development, production, etc.).

## Structure

- `types.ts` - Contains the configuration type definitions
- `default.ts` - Default configuration values for all environments
- `development.ts` - Development-specific configuration
- `production.ts` - Production-specific configuration
- `index.ts` - Entry point that loads the appropriate configuration based on environment

## Environment Variables

Create a `.env` file in the root of the project with the following variables:

```
# Server Configuration
PORT=3000
NODE_ENV=development

# Elasticsearch Configuration
ELASTIC_SEARCH_URL=http://localhost:9200
ELASTIC_SEARCH_API_KEY=your_api_key_here

# Logging
LOG_LEVEL=debug
```

For production, create a `.env.production` file with production-specific values.

## Usage

Import the configuration from anywhere in your application:

```typescript
import config from './config/index.js';

// Access config values
console.log(`Server running on port ${config.port}`);
console.log(`Environment: ${config.environment}`);
console.log(`Elasticsearch URL: ${config.elasticSearch.url}`);
```
