// <root>/app/weaverse/create-weaverse.server.ts

/**
 * Generate default CSP for Weaverse.
 * Change the return directives to match your needs.
 * 
 * @param request 
 * @returns CSP policies
 */
export function getWeaverseCsp(request: Request) {
  let url = new URL(request.url);
  let weaverseHost = url.searchParams.get('weaverseHost');
  let weaverseHosts = ['https://*.weaverse.io'];
  if (weaverseHost) {
    weaverseHosts.push(weaverseHost);
  }
  return {
    frameAncestors: weaverseHosts,
    defaultSrc: [
      "'self'",
      'https://cdn.shopify.com',
      'https://shopify.com',
      'https://*.youtube.com',
      'https://fonts.gstatic.com',
      ...weaverseHosts,
    ],
    imgSrc: [
      "'self'",
      "data:",
      'https://cdn.shopify.com',
      ...weaverseHosts,
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      'https://cdn.shopify.com',
      ...weaverseHosts,
    ],
  };
}
