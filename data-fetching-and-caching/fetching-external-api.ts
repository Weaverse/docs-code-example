import type {ComponentLoaderArgs} from '@weaverse/hydrogen';

type ExternalData = {
  // Type definition...
}

export let loader = async ({weaverse}: ComponentLoaderArgs) => {
  let {fetchWithCache, env} = weaverse;
  let API = `https://external-api.endpoint`

  // The component's `props.loaderData` type will be `ExternalData`
  return await fetchWithCache<ExternalData>(API, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': env.POKEMON_API_KEY,
    },
  });
};
