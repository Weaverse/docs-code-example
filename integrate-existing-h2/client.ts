import {
  createWeaverseClient,
  getWeaverseConfigs,
  I18nLocale,
} from '@weaverse/hydrogen';
import {themeSchema} from '~/weaverse/theme-schema';
import {components} from '~/weaverse/components';
import {createWithCache, Storefront} from '@shopify/hydrogen';

export type CreateWeaverseClient = {
  storefront: Storefront<I18nLocale>;
  request: Request;
  env: Env;
  cache: Cache;
  waitUntil: ExecutionContext['waitUntil'];
};

export function weaverseClient({
  storefront,
  request,
  env,
  cache,
  waitUntil,
}: CreateWeaverseClient) {
  return createWeaverseClient({
    storefront,
    countries: { // or import {countries} from '~/data/countries';
      default: {
        label: 'United States (USD $)',
        language: 'EN',
        country: 'US',
        currency: 'USD',
      }
    },
    themeSchema,
    components,
    configs: getWeaverseConfigs(request, env),
    withCache: createWithCache({cache, waitUntil}),
  });
}

export default weaverseClient;
