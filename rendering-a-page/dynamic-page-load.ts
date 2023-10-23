// <root>/app/routes/($locale).featured-products.tsx

import { json } from '@shopify/remix-oxygen';
import { type RouteLoaderArgs } from '@weaverse/hydrogen';

export async function loader(args: RouteLoaderArgs) {
  let {context} = args;
  return json({
    weaverseData: await context.weaverse.loadPage({  type: "COLLECTION" }),
    // any additional page data
  });
}
