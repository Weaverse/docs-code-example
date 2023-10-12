{
  inspector: [
    {
      group: 'Hero',
      inputs: [
        {
          type: 'select',
          name: 'height',
          label: 'Height',
          configs: {
            options: [
              {label: 'Auto', value: 'auto'},
              {label: 'Fullscreen', value: 'full'},
            ],
          },
          defaultValue: 'auto',
        },
        // More input settings...
      ],
    },
  ],
}
