import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    :root {
        --primary-100: #3692FF;
        --primary-200: #1967D6;
        --primary-300: #1251AA;

        --error-red: #F74747;

        --secondary-50: #F9FAFB;
        --secondary-100: #F3F4F6;
        --secondary-200: #E5E7EB;
        --secondary-400: #9CA3AF;
        --secondary-500: #6B7280;
        --secondary-600: #4B5563;
        --secondary-700: #374151;
        --secondary-800: #1F2937;
        --secondary-900: #111827;
    }

    * {
        box-sizing: border-box;
    }

    html {
        font-family: "Pretendard", sans-serif;
    }
`;
