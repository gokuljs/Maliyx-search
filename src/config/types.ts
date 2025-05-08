// Define configuration interface
export interface Config {
  port: number;
  environment: string;
  elasticSearch: {
    url: string;
    apiKey?: string;
  };
  logging: {
    level: string;
  };
  // Add other configuration properties as needed
}
