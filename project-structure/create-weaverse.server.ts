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
