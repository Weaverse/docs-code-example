import {
  ComponentLoaderArgs,
  getSelectedProductOptions,
  WeaverseProduct
} from '@weaverse/hydrogen';
import {ProductInfoQuery} from 'storefrontapi.generated';
import {PRODUCT_QUERY} from '~/data/queries';

type MyComponentData = {
  product: WeaverseProduct;
  // more data props...
};

// Component definition...

export let loader = async (args: ComponentLoaderArgs<MyComponentData>) => {
  // Getting `weaverse` client instance and component's `data` from component's loader function's arguments
  let {weaverse, data} = args;
  let {storefront, request, env} = weaverse;

  if (data.product) {
    return await storefront.query<ProductInfoQuery>(PRODUCT_QUERY, {
      variables: {
        // `product.handle` should be a `string` since `MyComponentData` type is passed to `ComponentLoaderArgs<T>`
        handle: data.product.handle,
        // Using `request` or `env` if needed, they are available as `weaverse` instance's properties
        selectedOptions: getSelectedProductOptions(request);,
        language: storefront.i18n.language,
        country: storefront.i18n.country,
      },
    });
  }
  return null;
};
