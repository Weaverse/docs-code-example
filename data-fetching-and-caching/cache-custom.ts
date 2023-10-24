import type {ComponentLoaderArgs} from '@weaverse/hydrogen';

export let loader = async ({weaverse}: ComponentLoaderArgs) => {
  let {fetchWithCache, storefront} = weaverse;
  let API = `https://external-api`;

  return await fetchWithCache(API, {
    strategy: storefront.CacheCustom({
      mode: 'must-revalidate, no-transform',
      maxAge: 30,
    }),
    // request init options...
  });
};
