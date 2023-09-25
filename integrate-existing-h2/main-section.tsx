// app/sections/main.tsx
import {
  type HydrogenComponentProps,
  type HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';

interface MainProps extends HydrogenComponentProps {}

// The Main component is the default Weaverse component used to render the primary content.
// It encapsulates all sections/components within a Weaverse page.
const Main = forwardRef<HTMLDivElement, MainProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});

export default Main;

export const schema: HydrogenComponentSchema = {
  type: 'main',
  title: 'Main',
  inspector: [],
};
