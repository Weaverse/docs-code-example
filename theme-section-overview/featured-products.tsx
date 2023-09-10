let FeaturedProducts = forwardRef<HTMLElement, FeaturedProductsProps>(
  (props, ref) => {
    let {loaderData, heading, productsCount, ...rest} = props;
    return (
      <section ref={ref} {...rest}>
        {loaderData?.products?.nodes ? (
          <ProductSwimlane
            products={loaderData.products}
            title={heading}
            count={productsCount}
          />
        ) : null}
      </section>
    );
  },
);
