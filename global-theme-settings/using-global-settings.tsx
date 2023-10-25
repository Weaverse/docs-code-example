import {useThemeSettings} from '@weaverse/hydrogen';

export function GlobalStyle() {
  let settings = useThemeSettings();
  if (settings) {
    let {
      bodyBaseSize,
      bodyBaseLineHeight,
      headingBaseSize,
      // more settings...
    } = settings;

    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              --body-base-size: ${bodyBaseSize}px;
              --body-base-line-height: ${bodyBaseLineHeight};
              --heading-base-size: ${headingBaseSize}px;
              --height-nav: ${settings.navHeightMobile}rem;
            }
          `,
        }}
      />
    );
  }
  return null;
}
