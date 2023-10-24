// <root>/app/routes/($locale)._index.tsx

import { json } from '@shopify/remix-oxygen';
import { type RouteLoaderArgs } from '@weaverse/hydrogen';

export async function loader({context}: RouteLoaderArgs) {
  let {weaverse} = context;

  return json({
    // The key prop for a Weaverse page must always be `weaverseData`
    weaverseData: await weaverse.loadPage(),
    // Additional page data...
  });
}
