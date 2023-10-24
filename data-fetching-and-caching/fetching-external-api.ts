export let loader = async ({weaverse}: ComponentLoaderArgs<HeroSectionData>) => {
  let {fetchWithCache, env} = weaverse;
  let API = `https://pokeapi.co/api/v2/pokemon/pikachu`
  let pokemon = await fetchWithCache<PokemonData>(API, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': env.POKEMON_API_KEY,
    },
  });
  return pokemon;
};
