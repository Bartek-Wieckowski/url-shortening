import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
     --color-primary-1: hsl(180, 66%, 49%);
     --color-primary-2: hsl(257, 27%, 26%);
     --color-secondary: hsl(0, 87%, 67%);

     --color-neutral-1: hsl(0, 0%, 75%);
     --color-neutral-2: hsl(257, 7%, 63%);
     --color-neutral-3: hsl(255, 11%, 22%);
     --color-neutral-4: hsl(260, 8%, 14%);

     --color-btn-hover-1: hsl(180, 67%, 80%);
     --color-btn-hover-2: hsl(258, 28%, 55%);

     --border-radius-sm: 12px;
     --border-radius-rounded: 25px;

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
  overflow-x: hidden;
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
  margin: 0;
  padding: 0;
}
p {
    font-weight: 400;
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

h1 {
    font-weight: 700;
    font-size: 2.8rem;
    margin-bottom: 15px;

    @media (min-width: 576px) {
      font-size: 3.2rem;
    }

    @media (min-width: 992px) {
      font-size: 3.6rem;
    }

    @media (min-width: 1200px) {
      font-size: 4.8rem;
    }
  }
`;

export default GlobalStyles;
