export let schema: HydrogenComponentSchema = {
  type: 'featured-products',
  title: 'Featured products',
  limit: 1,
  enabledOn: {
    pages: ['INDEX'],
  },
  inspector: [
    {
      group: 'Featured products',
      inputs: [
        {
          type: 'text',
          name: 'heading',
          label: 'Heading',
          defaultValue: 'Featured Products',
          placeholder: 'Featured Products',
        },
        {
          type: 'range',
          name: 'productsCount',
          label: 'Number of products',
          defaultValue: 12,
          configs: {
            min: 1,
            max: 12,
            step: 1,
          },
        },
      ],
    },
  ],
  toolbar: ['general-settings', ['duplicate', 'delete']],
};
