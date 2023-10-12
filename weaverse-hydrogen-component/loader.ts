import type {ComponentLoaderArgs} from '@weaverse/hydrogen';

export let loader = async (args: ComponentLoaderArgs<MyComponentData>) => {
  let {weaverse, data} = args;
  
  // Data fetching logic...
  
  return {
    // ... loader data
  }
};
