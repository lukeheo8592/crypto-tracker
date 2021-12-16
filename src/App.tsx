import styled, { createGlobalStyle } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { darkTheme,lightTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.2;
  background-color:${(props) => props.theme.bgColor};
  z-index: 100;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

const Btn = styled.button`
position: relative;
    top: 30px;
    left: 58%;
  height:30px;
  margin-bottom: 10px;
  border-radius: 10rem;
  text-transform: uppercase;
  transition: all .5s;
  color:${(props) => props.theme.btnTextColor};
  background-color:${(props) => props.theme.btnBgColor};
  &:hover{
    background-color:${(props) => props.theme.btnOpColor};
    color:${(props) => props.theme.btnbtnTextOpColor};
  }
  
`;

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
<>
      <GlobalStyle />
      <Btn onClick={toggleTheme}>{theme === 'light' ? "light Mode" : "Dark Mode"} </Btn>
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
    </ThemeProvider>
    
  );
}

export default App;