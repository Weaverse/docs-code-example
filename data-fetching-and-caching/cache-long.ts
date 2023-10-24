import { json } from '@shopify/remix-oxygen';
import { type RouteLoaderArgs } from '@weaverse/hydrogen';

export async function loader({context}: RouteLoaderArgs) {
  let {weaverse, storefront} = context;

  return json({
    weaverseData: await weaverse.loadPage({
      strategy: storefront.CacheLong()
    }),
    // Additional page data...
  });
}
