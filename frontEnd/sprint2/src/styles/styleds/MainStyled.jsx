import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const MainSection = styled.section `

`

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SaludoSection = styled.section `

  &:hover {
    h1{
      animation: ${rotate} 1s linear infinite;

    }
  }
  h1{
    width:80%;
    height: 100%;
    margin: 1rem;
  }

  display: grid;
  margin-top: 4rem;
  margin-bottom: 4rem;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  width: 100%;
  overflow: hidden;
  //height: 250px;

  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 30px;
  text-align: left;
  text-justify:auto;
  @media only screen and (min-width: 790px) {
    font-size: 50px;
  }

`

