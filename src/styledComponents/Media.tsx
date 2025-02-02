import { css } from 'styled-components';

const sizes = {
  mobile: { min: '320px', max: '480px' },
  tablet: { min: '481px', max: '991px' },
  largeTablet: { min: '992px', max: '1199px' },
  desktop: { min: '1200px' },
};


export const media = {
  mobile: (styles) => css`
    @media (min-width: ${sizes.mobile.min}) and (max-width: ${sizes.mobile.max}) {
      ${styles}
    }
  `,
  tablet: (styles) => css`
    @media (min-width: ${sizes.tablet.min}) and (max-width: ${sizes.tablet.max}) {
      ${styles}
    }
  `,
  largeTablet: (styles) => css`
    @media (min-width: ${sizes.largeTablet.min}) and (max-width: ${sizes.largeTablet.max}) {
      ${styles}
    }
  `,
  desktop: (styles) => css`
    @media (min-width: ${sizes.desktop.min}) {
      ${styles}
    }
  `,
};