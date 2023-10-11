import {createWeaverseClient} from '~/weaverse/create-weaverse.server';

const handleRequest = createRequestHandler({
  // ...
  getLoadContext: () => ({
    // App context properties
    // Injecting the Weaverse client into the loader context.
    weaverse: createWeaverseClient({
      storefront,
      request,
      env,
      cache,
      waitUntil,
    }),
  }),
});
