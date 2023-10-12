let MyComponent = forwardRef<HTMLElement, MyComponentProps>((props, ref) => {
  let {loaderData, ...rest} = props;
  return <section ref={ref} {...rest} />;
});

export default MyComponent
