import type {ComponentLoaderArgs} from '@weaverse/hydrogen';

export let loader = async ({weaverse}: ComponentLoaderArgs) => {
  let {fetchWithCache, storefront} = weaverse;
  let API = `https://external-api`

  // The component's `props.loaderData` type will be `PokemonData`
  return await fetchWithCache(API, {
    strategy: storefront.CacheLong(),
    // request init options...
  });
};
