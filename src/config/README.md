# Configuration

This folder contains the configuration setup for the application, supporting different environments (development, production, etc.) through environment-specific `.env` files.

## Structure

- `types.ts` - Contains the configuration type definitions
- `index.ts` - Entry point that loads configuration from environment variables

## Environment Files

The application uses environment-specific `.env` files:

1. Create a `.env.development` file for local development:

```
# Server Configuration
PORT=3000

# Elasticsearch Configuration
ELASTIC_SEARCH_URL=http://localhost:9200
ELASTIC_SEARCH_API_KEY=your_dev_api_key_here

# Logging
LOG_LEVEL=debug
```

2. Create a `.env.production` file for production:

```
# Server Configuration
PORT=8080

# Elasticsearch Configuration
ELASTIC_SEARCH_URL=https://your-production-es-instance.com
ELASTIC_SEARCH_API_KEY=your_prod_api_key_here

# Logging
LOG_LEVEL=warn
```

You can also create a common `.env` file for shared settings between environments.

## Usage

Import the configuration from anywhere in your application:

```typescript
import config from './config/index.js';

// Access config values
console.log(`Server running on port ${config.port}`);
console.log(`Environment: ${config.environment}`);
console.log(`Elasticsearch URL: ${config.elasticSearch.url}`);
```
