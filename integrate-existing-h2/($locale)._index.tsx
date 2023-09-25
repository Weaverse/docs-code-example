import { AnalyticsPageType } from '@shopify/hydrogen';
import { defer } from '@shopify/remix-oxygen';
import { type RouteLoaderArgs } from '@weaverse/hydrogen';
import { routeHeaders } from '~/data/cache';
import { SHOP_QUERY } from '~/data/queries';
import { seoPayload } from '~/lib/seo.server';
import { WeaverseContent } from '~/weaverse';

export const headers = routeHeaders;

export async function loader(args: RouteLoaderArgs) {
  const { params, context } = args;
  const { language, country } = context.storefront.i18n;

  if (params.locale && params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()) {
    // Redirect to the 404 page if the locale URL parameter doesn't match the current setting.
    throw new Response(null, { status: 404 });
  }

  const { shop } = await context.storefront.query(SHOP_QUERY);
  const seo = seoPayload.home();

  return defer({
    shop,
    weaverseData: await context.weaverse.loadPage(args),
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    seo,
  });
}

export default function Homepage() {
  return <WeaverseContent />;
}
