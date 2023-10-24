import type {ComponentLoaderArgs} from '@weaverse/hydrogen';

export let loader = async ({weaverse}: ComponentLoaderArgs) => {
  let {fetchWithCache, storefront} = weaverse;
  return await fetchWithCache(`https://external-api.endpoint`, {
    strategy: storefront.CacheCustom({
      mode: 'must-revalidate, no-transform',
      maxAge: 30,
    }),
    // request init options...
  });
};
