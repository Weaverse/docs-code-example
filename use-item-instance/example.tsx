import { useItemInstance } from '@weaverse/hydrogen';

function MyComponent() {
  let instance = useItemInstance('itemId');

  // Interact with the item instance
  // ...

  return (
    // Render your component
  );
};
