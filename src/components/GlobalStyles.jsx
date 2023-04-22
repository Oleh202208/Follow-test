import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
      position: relative;
  margin: 0;
  font-family: "MontserratMedium", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
button {
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
}`;
