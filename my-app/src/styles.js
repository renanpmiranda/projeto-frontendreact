import styled from "styled-components";
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`

export const MainContainer = styled.div`
  padding: 25px;
  background-color: lightgray;
`
