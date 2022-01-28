import React from 'react';
import styled from 'styled-components';

import { MainSection, SaludoSection } from '../styles/styleds/MainStyled';
import {NavProd} from '../components/NavProd'
import ProductosMain from '../components/ProductosMain';


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
    <ProductosMain>
      
    </ProductosMain>


  </MainSection>);
};

export default Main;
