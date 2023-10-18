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
  let {weaverse, data} = args;
  let {storefront, request} = weaverse;
  let selectedOptions = getSelectedProductOptions(request);

  if (data.product) {
    return await storefront.query<ProductInfoQuery>(PRODUCT_QUERY, {
      variables: {
        handle: data.product.handle,
        selectedOptions,
        language: storefront.i18n.language,
        country: storefront.i18n.country,
      },
    });
  }
  return null;
};
