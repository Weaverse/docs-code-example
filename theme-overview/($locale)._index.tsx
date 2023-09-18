import {AnalyticsPageType} from '@shopify/hydrogen';
import {defer} from '@shopify/remix-oxygen';
import {type RouteLoaderArgs} from '@weaverse/hydrogen';
import {routeHeaders} from '~/data/cache';
import {SHOP_QUERY} from '~/data/queries';
import {seoPayload} from '~/lib/seo.server';
import {WeaverseContent} from '~/weaverse';

export const headers = routeHeaders;

export async function loader(args: RouteLoaderArgs) {
  let {params, context} = args;
  let {language, country} = context.storefront.i18n;

  if (
    params.locale &&
    params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    // If the locale URL param is defined, yet we still are on `EN-US`
    // then the locale param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }

  let {shop} = await context.storefront.query(SHOP_QUERY);
  let seo = seoPayload.home();

  return defer({
    shop,
    weaverseData: context.weaverse.loadPage(args),
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    seo,
  });
}

export default function Homepage() {
  return <WeaverseContent />;
}
