import { css, CSSProp } from 'styled-components'

export interface MediaQueryProps {
  tablet: number
  desktop: number
}

const sizes: MediaQueryProps = {
  tablet: 768,
  desktop: 1200,
}

const media = {
  tablet: (cssProp: CSSProp): CSSProp => css`
    @media only screen and (min-width: ${sizes.tablet}px) {
      ${cssProp}
    }
  `,
  desktop: (cssProp: CSSProp): CSSProp => css`
    @media only screen and (min-width: ${sizes.desktop}px) {
      ${cssProp}
    }
  `,
} as Record<keyof typeof sizes, (cssProp: CSSProp) => CSSProp>

export default media
