// <root>/server.ts

import {createWeaverseClient} from '~/weaverse/create-weaverse.server';

const handleRequest = createRequestHandler({
  // ...
  getLoadContext: () => ({
    // Injecting the Weaverse client into the loader context.
    weaverse: createWeaverseClient({
      storefront,
      request,
      env,
      cache,
      waitUntil,
    }),
    // ... more app context properties
  }),
});
