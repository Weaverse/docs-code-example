import weaverseClient from '~/weaverse/client';

/**
 * Create a Remix request handler and pass
 * Hydrogen's Storefront client to the loader context.
 */
const handleRequest = createRequestHandler({
  build: remixBuild,
  mode: process.env.NODE_ENV,
  getLoadContext: () => ({
    session,
    storefront,
    cart,
    env,
    waitUntil,
    weaverse: weaverseClient({
      storefront,
      request,
      env,
      cache,
      waitUntil,
    }),
  }),
});
