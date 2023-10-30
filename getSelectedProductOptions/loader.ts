// <root>/app/routes/($locale).products.$productHandle.tsx

import {LoaderArgs} from '@shopify/remix-oxygen';
import {getSelectedProductOptions} from '@weaverse/hydrogen';

export async function loader({ params, request, context }: LoaderArgs) {
  let {shop, product} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      handle: params.productHandle,
      // Use the utility to get selected product options from the request
      selectedOptions: getSelectedProductOptions(request);,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });
  
  // Fetch and return the product data based on the selected options
  // ...
}
