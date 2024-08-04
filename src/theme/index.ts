import fonts from 'src/theme/fonts'
import colors from 'src/theme/colors'
import media from './media'

const theme = {
  fonts,
  colors,
  media,
} as const

export type ThemeType = typeof theme

export default theme
