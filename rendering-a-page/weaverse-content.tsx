import {WeaverseHydrogenRoot} from '@weaverse/hydrogen';
import {GenericError} from '~/components/GenericError';
import {components} from './components';

export function WeaverseContent() {
  return (
    <WeaverseHydrogenRoot
      // All the components that are used in the Weaverse page
      components={components}
      // Optional error component to render if any error occurs
      errorComponent={GenericError}
    />
  );
}
