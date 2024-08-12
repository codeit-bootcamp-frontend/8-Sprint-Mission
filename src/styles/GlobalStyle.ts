import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  /* gray */
  --gray900-color: #111827;
  --gray800-color: #1f2937;
  --gray700-color: #374151;
  --gray600-color: #4b5563;
  --gray500-color: #6b7280;
  --gray400-color: #9ca3af;
  --gray200-color: #e5e7eb;
  --gray100-color: #f3f4f6;
  --gray50-color: #f9fafb;

	/* white */
	--white-color: #ffffff;

  /* point */
  --blue-color: #3692ff;

  /* error */
  --red-color: #f74747;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body,
html {
	height: 100%;
  font-size: 62.5%;
	font-family: 'Pretendard';
  line-height: 1;
  color: #111827;
}

body {
	padding-bottom: 160px
}

a {
  text-decoration: none;
  color: #111827;
}

ul,
ol {
  list-style: none;
}

input:focus {
  outline: none;
}

textarea:focus {
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;

export default GlobalStyle;
