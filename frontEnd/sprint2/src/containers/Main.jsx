import React from 'react';
import styled from 'styled-components';

import { MainSection, SaludoSection } from '../styles/styleds/MainStyled';
import {NavProd} from '../components/NavProd'


const NavProductos = styled.nav `

`



const Main = () => {
  return (
  <MainSection>
    <SaludoSection>
      <h1>
      Nada como una Guajolota para empezar el día
      </h1>
    </SaludoSection>
    <NavProductos>
      <NavProd>
        
      </NavProd>
      

    </NavProductos>


  </MainSection>);
};

export default Main;
