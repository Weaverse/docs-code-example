import {json} from '@shopify/remix-oxygen';
import {type RouteLoaderArgs} from '@weaverse/hydrogen';

export async function loader({context}: RouteLoaderArgs) {
  let {weaverse} = context;
  // Fetching external data with `weaverse.fetchWithCache` ...
  
  return json({
    // ... Route's data
  })
}
