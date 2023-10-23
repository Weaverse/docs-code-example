// <root>/app/routes/($locale)._index.tsx

import { json } from '@shopify/remix-oxygen';
import { type RouteLoaderArgs } from '@weaverse/hydrogen';

export async function loader(args: RouteLoaderArgs) {
  let {context} = args;

  return json({
    // The key prop for a Weaverse page must always be `weaverseData`
    weaverseData: await context.weaverse.loadPage(),
    // Additional page data...
  });
}
