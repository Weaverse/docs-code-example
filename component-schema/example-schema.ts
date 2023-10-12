import type { HydrogenComponentSchema } from '@weaverse/hydrogen';

let exampleSchema: HydrogenComponentSchema = {
  title: 'Product Card',
  type: 'product-card',
  inspector: [
    {
      group: 'Settings',
      inputs: [] // Defining input settings
    }
  ],
  childTypes: ['image', 'product-title', 'price'],
  presets: {
    type: 'product-card',
    children: [
      { type: 'image' },
      { type: 'product-title' },
      { type: 'price' },
    ],
  },
  limit: 3,
  enabledOn: {
    pages: ['INDEX', 'PRODUCT', 'ALL_PRODUCTS'],
    groups: ['body'],
  },
  toolbar: ['general-settings', ['duplicate', 'delete']],
};
