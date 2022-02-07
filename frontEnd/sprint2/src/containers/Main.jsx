import React from 'react';
import styled from 'styled-components';

import { MainSection, SaludoSection } from '../styles/styleds/MainStyled';
import {NavProd} from '../components/ProdComponents/NavProd'
import ProductosMain from '../components/ProdComponents/ProductosMain';
import Search from './Search';

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
    <Search/>
    <NavProductos>
      <NavProd>
      </NavProd>
    </NavProductos>
    <ProductosMain>
    </ProductosMain>
  </MainSection>);
};

export default Main;
