import type {ComponentLoaderArgs} from '@weaverse/hydrogen';

export let loader = async ({weaverse}: ComponentLoaderArgs) => {
  // Get `env` variables from `weaverse` client
  let {env} = weaverse;
  
  return {
    // ... component loader data
  };
};
