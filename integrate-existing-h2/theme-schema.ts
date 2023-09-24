import type {HydrogenThemeSchema} from '@weaverse/hydrogen';

export let themeSchema: HydrogenThemeSchema = {
  info: {
    version: '1.0.0',
    author: 'Your name',
    name: 'Your Theme Name',
    authorProfilePhoto:
      'https://ucarecdn.com/174c3d08-fc53-4088-8d12-8eaf7090cdec/',
    documentationUrl: 'https://weaverse.io/docs',
    supportUrl: 'https://help.weaverse.io/',
  },
  inspector: [
    {
      group: 'Colors (light)',
      inputs: [
        {
          type: 'color',
          label: 'Primary',
          name: 'colorPrimary',
          defaultValue: '#141414',
        },
      ],
    },
  ],
};
