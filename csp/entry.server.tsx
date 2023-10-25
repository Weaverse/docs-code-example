import {RemixServer} from '@remix-run/react';
import {createContentSecurityPolicy} from '@shopify/hydrogen';
import type {EntryContext} from '@shopify/remix-oxygen';
import {renderToReadableStream} from 'react-dom/server';
import {getWeaverseCsp} from '~/weaverse/create-weaverse.server';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const {nonce, header, NonceProvider} = createContentSecurityPolicy(
    getWeaverseCsp(request),
  );
  const body = await renderToReadableStream(
    <NonceProvider>
      <RemixServer context={remixContext} url={request.url} />
    </NonceProvider>,
    {
      nonce,
      // ...
    },
  );

  responseHeaders.set('Content-Security-Policy', header);
  // ...
}
