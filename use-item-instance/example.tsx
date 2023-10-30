import { useItemInstance } from '@weaverse/hydrogen';

functiom MyComponent() {
  let instance = useItemInstance('itemId');

  // Interact with the item instance
  // ...

  return (
    // Render your component
  );
};
