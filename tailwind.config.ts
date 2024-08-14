import type { Config } from 'tailwindcss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PluginAPI } from 'tailwindcss/types/config';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
    './contexts/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        lg: '1200px',
      },
    },
    screens: {
      tablet: '768px',
      desktop: '1200px',
    },
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        primary: {
          100: '#3692FF',
          200: '#1967D6',
          300: '#1251AA',
        },
        secondary: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        error: '#F74747',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwindcss-animate'),
    ({ addUtilities }: PluginAPI) => {
      addUtilities({
        '.font-xs-12px-regular': {
          fontFamily: 'Pretendard',
          fontSize: '12px',
          fontWeight: 'regular',
          lineHeight: '18px',
          textAlign: 'left',
        },
        '.font-xs-12px-medium': {
          fontFamily: 'Pretendard',
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '18px',
          textAlign: 'left',
        },
        '.font-xs-12px-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '12px',
          fontWeight: '600',
          lineHeight: '20px',
          textAlign: 'left',
        },
        '.font-sm-13px-medium': {
          fontFamily: 'Pretendard',
          fontSize: '13px',
          fontWeight: '500',
          lineHeight: '22px',
          textAlign: 'left',
        },
        '.font-sm-13px-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '13px',
          fontWeight: '600',
          lineHeight: '22px',
          textAlign: 'left',
        },
        '.font-md-14px-regular': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '24px',
          textAlign: 'left',
        },
        '.font-md-14px-medium': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '24px',
          textAlign: 'left',
        },
        '.font-lg-14px-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '24px',
          textAlign: 'left',
        },
        '.font-lg-14px-bold': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '24px',
          textAlign: 'left',
        },
        '.font-lg-16px-regular': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '26px',
          textAlign: 'left',
        },
        '.font-lg-16px-medium': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontWeight: '500',
          lineHeight: '26px',
          textAlign: 'left',
        },
        '.font-lg-16px-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '26px',
          textAlign: 'left',
        },
        '.font-lg-16px-bold': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '26px',
          textAlign: 'left',
        },
        '.font-2lg-18px-regular': {
          fontFamily: 'Pretendard',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '26px',
          textAlign: 'left',
        },
        '.font-2lg-18px-medium': {
          fontFamily: 'Pretendard',
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '26px',
          textAlign: 'left',
        },
        '.font-2lg-18px-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '26px',
          textAlign: 'left',
        },
        '.font-2lg-18px-bold': {
          fontFamily: 'Pretendard',
          fontSize: '18px',
          fontWeight: '700',
          lineHeight: '26px',
          textAlign: 'left',
        },
        '.font-xl-20px-regular': {
          fontFamily: 'Pretendard',
          fontSize: '20px',
          fontWeight: '400',
          lineHeight: '32px',
          textAlign: 'left',
        },
        '.font-xl-20px-medium': {
          fontFamily: 'Pretendard',
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '32px',
          textAlign: 'left',
        },
        '.font-xl-20px-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '32px',
          textAlign: 'left',
        },
        '.font-xl-20px-bold': {
          fontFamily: 'Pretendard',
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '32px',
          textAlign: 'left',
        },
        '.font-2xl-24px-regular': {
          fontFamily: 'Pretendard',
          fontSize: '24px',
          fontWeight: '400',
          lineHeight: '32px',
          textAlign: 'left',
        },
        '.font-2xl-24px-medium': {
          fontFamily: 'Pretendard',
          fontSize: '24px',
          fontWeight: '500',
          lineHeight: '32px',
          textAlign: 'left',
        },
        '.font-2xl-24px-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '24px',
          fontWeight: '600',
          lineHeight: '32px',
          textAlign: 'left',
        },
        '.font-2xl-24px-bold': {
          fontFamily: 'Pretendard',
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '32px',
          textAlign: 'left',
        },
        '.font-3xl-32px-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '32px',
          fontWeight: '600',
          lineHeight: '42px',
          textAlign: 'left',
        },
        '.font-3xl-32px-bold': {
          fontFamily: 'Pretendard',
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '42px',
          textAlign: 'left',
        },
      });
    },
  ],
};

export default config;
