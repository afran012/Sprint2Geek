import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { MainSection, SaludoSection, SearchSection } from '../styles/styleds/MainStyled';
import {NavProd} from '../components/ProdComponents/NavProd'
import ProductosMain from '../components/ProdComponents/ProductosMain';
import Search from './Search';
import "../styles/css/search.css"
import { getData } from '../helpers/getData';
import ProductsContext from '../context/ProductsContext';
import { url } from '../helpers/url';
import {NavProdContext} from '../context/NavProdContext';
//import SearchContext from '../context/SearchContext'

const NavProductos = styled.nav `

`


const Main = () => {

  const [Productos, setProductos] = useState({
    bebidas : [],
    guajolotas: [],
    tamales: [],
});

const traerDatos = async () => {
  const datos = await getData(`${url}Productos`);
  setProductos(datos);
  // return datos;
};

useEffect(() => {
  traerDatos()
  //setNavProducto(bebidas)
  
}, []);

//let {bebidas , guajolotas , tamales} = Productos


const [NavProducto, setNavProducto] = useState({
  selectProd: "guajolotas",
  containProd: []
});

  
  const [SearchState, setSearchState] = useState({
    active:false
  });
  
  const searchActive = ()=>{
    

      setSearchState({
        active: !SearchState.active
    })
    console.log(SearchState.active);
  }



  //const {active} = SearchState

  const mystyle1 = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    position: "absolute",
    top: "1%"
  };

  return (
  <ProductsContext.Provider value={{ Productos, setProductos }} >
    <MainSection>
      <SaludoSection>
        <h1>
        Nada como una Guajolota para empezar el día
        </h1>
      </SaludoSection>
      <SearchSection style={SearchState.active ? mystyle1 : {} } onClick={searchActive}>
      <Search/>
      </SearchSection>
      <NavProdContext.Provider value={{ NavProducto, setNavProducto }}>   
      <NavProductos>
        <NavProd>
        </NavProd>
      </NavProductos>
      <ProductosMain>
      </ProductosMain>
      </NavProdContext.Provider>
    </MainSection>
  </ProductsContext.Provider>
 );
}

export default Main;
