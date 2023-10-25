import type { HydrogenThemeSchema } from '@weaverse/hydrogen';
import pkg from '../../package.json';

export let themeSchema: HydrogenThemeSchema = {
  info: {
    version: pkg.version,
    author: '',
    name: '',
    authorProfilePhoto: '',
    documentationUrl: '',
    supportUrl: '',
  },
  inspector: [
    {
      group: '',
      inputs: [
        // Define your inputs here
      ],
    },
  ],
};
