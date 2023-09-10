export let loader = async ({context}: WeaverseLoaderArgs) => {
  let {language, country} = context.storefront.i18n;
  return await context.storefront.query<HomepageFeaturedProductsQuery>(
    HOMEPAGE_FEATURED_PRODUCTS_QUERY,
    {
      variables: {
        country,
        language,
      },
    },
  );
};
