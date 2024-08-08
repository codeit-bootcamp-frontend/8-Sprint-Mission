import type { Config } from 'tailwindcss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
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
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        primary: {
          100: '#3692FF',
          200: '#FFFFFF',
          300: '#3692FF',
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
        '.font-xs-12px-regular': '',
        '.font-xs-12px-medium': '',
        '.font-xs-12px-semibold': '',
        '.font-sm-13px-medium': '',
        '.font-sm-13px-semibold': '',
        '.font-md-14px-regular': '',
        '.font-md-14px-medium': '',
        '.font-lg-14px-semibold': '',
        '.font-lg-14px-bold': '',
        '.font-lg-16px-regular': '',
        '.font-lg-16px-medium': '',
        '.font-lg-16px-semibold': '',
        '.font-lg-16px-bold': '',
        '.font-2lg-18px-regular': '',
        '.font-2lg-18px-medium': '',
        '.font-2lg-18px-semibold': '',
        '.font-2lg-18px-bold': '',
        '.font-xl-20px-regular': '',
        '.font-xl-20px-medium': '',
        '.font-xl-20px-semibold': '',
        '.font-xl-20px-bold': '',
        '.font-2xl-24px-regular': '',
        '.font-2xl-24px-medium': '',
        '.font-2xl-24px-semibold': '',
        '.font-2xl-24px-bold': '',
        '.font-3xl-32px-semibold': '',
        '.font-3xl-32px-bold': '',
      });
    },
  ],
};

export default config;
