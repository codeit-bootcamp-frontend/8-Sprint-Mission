import { colors } from '../styles';

export const BTN_SMALL = {
  40: {
    default: {
      size: '2.625rem',
      color: colors.coolGray[100],
      bgColor: colors.primary[100],
      border: 'none',
    },
    outline: {
      size: '2.625rem',
      color: colors.primary[100],
      bgColor: colors.coolGray[50],
      border: `border: 1px solid ${colors.primary[100]}`,
    },
  },
  48: {
    default: {
      size: '3rem',
      color: colors.coolGray[100],
      bgColor: colors.primary[100],
      border: 'none',
    },
    outline: {
      size: '3rem',
      color: colors.primary[100],
      bgColor: colors.coolGray[50],
      border: `border: 1px solid ${colors.primary[100]}`,
    },
  },
};
