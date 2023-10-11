import type {WeaverseClient} from '@weaverse/hydrogen';

/**
 * Declare expected Env parameter in fetch handler.
 */
interface Env {
  SESSION_SECRET: string;
  PUBLIC_STOREFRONT_API_TOKEN: string;
  PRIVATE_STOREFRONT_API_TOKEN: string;
  PUBLIC_STORE_DOMAIN: string;
  PUBLIC_STOREFRONT_ID: string;
  /**
   * Include the Weaverse Project's ID - you'll find this in the Weaverse Editor under Project Settings.
   * And the optional Weaverse Host - which value is https://weaverse.io by default.
   */
  WEAVERSE_PROJECT_ID: string;
  WEAVERSE_HOST: string;
}

/**
 * Declare local additions to the Remix loader context.
 */
export interface AppLoadContext {
  waitUntil: ExecutionContext['waitUntil'];
  session: HydrogenSession;
  storefront: Storefront;
  cart: HydrogenCart;
  env: Env;
  // Include the Weaverse Client in the Remix loader context.
  weaverse: WeaverseClient;
}
