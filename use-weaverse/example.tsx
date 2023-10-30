import { useWeaverse } from '@weaverse/hydrogen';

function MyComponent() {
  let { data, itemInstances, elementRegistry } = useWeaverse();

  // Example: Accessing specific component instance data
  let instance = itemInstances['uniqueComponentId'];
  // ...

  return (
    // ...
  );
};
