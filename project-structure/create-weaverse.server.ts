// <root>/app/weaverse/create-weaverse.server.ts

import {Storefront} from '@shopify/hydrogen';
import {I18nLocale, WeaverseClient} from '@weaverse/hydrogen';
import {countries} from '~/data/countries';
import {components} from '~/weaverse/components';
import {themeSchema} from '~/weaverse/schema.server';

type CreateWeaverseArgs = {
  storefront: Storefront<I18nLocale>;
  request: Request;
  env: Env;
  cache: Cache;
  waitUntil: ExecutionContext['waitUntil'];
};

export function createWeaverseClient(args: CreateWeaverseArgs) {
  return new WeaverseClient({
    ...args,
    countries,
    themeSchema,
    components,
  });
}
