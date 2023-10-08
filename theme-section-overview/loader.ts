export let loader = async ({weaverse}: ComponentLoaderArgs) => {
  let {language, country} = weaverse.storefront.i18n;
  return await weaverse.storefront.query<HomepageFeaturedProductsQuery>(
    HOMEPAGE_FEATURED_PRODUCTS_QUERY,
    {
      variables: {
        country,
        language,
      },
    },
  );
};
