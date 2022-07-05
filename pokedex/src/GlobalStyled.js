import styled, { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  /* background-color: #383735; */
}
html, body{
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
}
`;