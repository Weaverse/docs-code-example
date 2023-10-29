// <root>/app/root.tsx

import {defer, type LoaderArgs} from '@shopify/remix-oxygen';

export async function loader({context}: LoaderArgs) {
  return defer({
    // Root data...
    weaverseTheme: await context.weaverse.loadThemeSettings(),
  });
}
