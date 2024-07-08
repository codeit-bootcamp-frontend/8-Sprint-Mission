import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
    --main-color: #3692FF;
    --error-red: #F74747;
    --background-color: #CFE5FF;
    --footer-color: #111827;
    --font: #374151;
    --font-buton: #ffffff;
    --font-footer: #9ca3af;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    }
    
    @font-face {
        font-family: 'Pretendard-Regular', 'Noto Sans';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    html {
        font-size: 62.5%;
    }

    body {
        color: var(--font);
        font-family: "Pretendard-Regular", 'Noto Sans';
        font-weight: 500;
        font-size: 2.4rem;
        margin: 0;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`;
