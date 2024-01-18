import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
     --color-primary-1: hsl(180, 66%, 49%);
     --color-primary-2: hsl(257, 27%, 26%);
     --color-secondary: hsl(0, 87%, 67%);

     --color-neutral-1:hsl(0, 0%, 75%);
     --color-neutral-2:hsl(257, 7%, 63%)
     --color-neutral-3:hsl(255, 11%, 22%)
     --color-neutral-4:hsl(260, 8%, 14%)

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-neutral-4);
  line-height: 1.5;
  font-size: 1.8rem;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

`;

export default GlobalStyles;
