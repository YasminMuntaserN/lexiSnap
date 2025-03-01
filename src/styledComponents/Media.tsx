import { css, FlattenSimpleInterpolation } from 'styled-components';

const sizes = {
  mobile: { min: '320px', max: '480px' },
  tablet: { min: '481px', max: '991px' },
  largeTablet: { min: '992px', max: '1199px' },
  desktop: { min: '1200px' },
};

type MediaFunction = (
  strings: TemplateStringsArray,
  ...interpolations: Array<((props) => string) | string>
) => FlattenSimpleInterpolation;

export const media = {
  mobile: ((strings: TemplateStringsArray, ...interpolations: Array<((props) => string) | string>) => css`
    @media (min-width: ${sizes.mobile.min}) and (max-width: ${sizes.mobile.max}) {
      ${css(strings, ...interpolations)}
    }
  `) as MediaFunction,

  tablet: ((strings: TemplateStringsArray, ...interpolations: Array<((props) => string) | string>) => css`
    @media (min-width: ${sizes.tablet.min}) and (max-width: ${sizes.tablet.max}) {
      ${css(strings, ...interpolations)}
    }
  `) as MediaFunction,

  largeTablet: ((strings: TemplateStringsArray, ...interpolations: Array<((props) => string) | string>) => css`
    @media (min-width: ${sizes.largeTablet.min}) and (max-width: ${sizes.largeTablet.max}) {
      ${css(strings, ...interpolations)}
    }
  `) as MediaFunction,

  desktop: ((strings: TemplateStringsArray, ...interpolations: Array<((props) => string) | string>) => css`
    @media (min-width: ${sizes.desktop.min}) {
      ${css(strings, ...interpolations)}
    }
  `) as MediaFunction,
};