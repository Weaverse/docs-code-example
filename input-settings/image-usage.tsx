import {Image} from '@shopify/hydrogen';
import type {HydrogenComponentProps, WeaverseImage} from '@weaverse/hydrogen';
import {forwardRef} from 'react';

interface ImageGalleryItemProps extends HydrogenComponentProps {
  source: WeaverseImage;
}

let ImageGalleryItem = forwardRef<HTMLImageElement, ImageGalleryItemProps>(
  (props, ref) => {
    let {source, ...rest} = props;
    /*
      Pass the object returned from the `image` input (name it as you like, e.g., `source`)
      directly to the `data` prop of the `Image` component.
      This will automatically generate all the necessary attributes for the image element.
    */
    return (
      <Image
        ref={ref}
        {...rest}
        data={source}
        sizes={`(min-width: 45em) 50vw, 100vw`}
      />
    );
  },
);

export default ImageGalleryItem;
