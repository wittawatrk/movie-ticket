const env = process.env;

export namespace Env {
  export const NODE_ENV = env.NODE_ENV ?? "production";
  export const PORT = env.PORT ?? "4200";
  export const BASE_URL = env.BASE_URL ?? "http://localhost:4200";
  export const API_URL = env.API_URL ?? "http://localhost:3000/api/v1";
  export const API_TIMEOUT = parseInt(env.API_TIMEOUT ?? "5000");
  export const API_MAX_RETRIES = parseInt(env.API_MAX_RETRIES ?? "3");
  export const API_RETRY_DELAY = parseInt(env.API_RETRY_DELAY ?? "1000");
  export const GEOSERVER_URL =
    env.GEOSERVER_URL ?? "http://localhost:8080/geoserver";
}
