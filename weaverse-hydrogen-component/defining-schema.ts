import type {HydrogenComponentSchema} from '@weaverse/hydrogen';

export let schema: HydrogenComponentSchema = {
  type: 'unique-type-string',
  title: 'Component Name',
  inspector: [
    // Inspector Configurations...
  ],
  toolbar: ['general-settings', ['duplicate', 'delete']],
};
