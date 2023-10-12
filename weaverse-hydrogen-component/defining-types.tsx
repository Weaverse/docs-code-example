import type {HydrogenComponentProps} from '@weaverse/hydrogen';

type MyComponentData = {
  heading: string;
  height: number;
  // More type definitions...
};

type MyComponentProps = HydrogenComponentProps & MyComponentData;

let MyComponent = forwardRef<HTMLElement, MyComponentProps>((props, ref) => {
  // Get the data from props
  let {heading, height, ...rest} = props;
  
  return <section ref={ref} {...rest} />;
});
