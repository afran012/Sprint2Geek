import React, {/* useEffect,*/ useState } from 'react';
import styled from 'styled-components';

import { MainSection, SaludoSection, SearchSection } from '../styles/styleds/MainStyled';
import {NavProd} from '../components/ProdComponents/NavProd'
import ProductosMain from '../components/ProdComponents/ProductosMain';
import Search from './Search';
import "../styles/css/search.css"
//import { getData } from '../helpers/getData';
//import ProductsContext from '../context/ProductsContext';
//import { url } from '../helpers/url';
import {NavProdContext} from '../context/NavProdContext';
import SearchContext from '../context/SearchContext';
//import SearchContext from '../context/SearchContext'

const NavProductos = styled.nav `

`


const Main = () => {





//let {bebidas , guajolotas , tamales} = Productos


const [NavProducto, setNavProducto] = useState({
  selectProd: "guajolotas",
  containProd: []
});

  
  const [SearchState, setSearchState] = useState({
    active:false
  });
  
  const searchActive = ()=>{
    if (SearchState.active===false) {
      setSearchState({
        active: !SearchState.active
      })      
    }
    console.log(SearchState.active);
  }



  //const {active} = SearchState

  const mystyle1 = {
    color: "white",
    backgroundColor: "#F2F2F2",
    padding: "10px",
    fontFamily: "Arial",
    position: "absolute",
    top: "1%",
    //height: "100%",
    width: "100%",
  };

  return (
  
    <MainSection>
      <SaludoSection>
        <h1>
        Nada como una Guajolota para empezar el día
        </h1>
      </SaludoSection>
      <SearchContext.Provider value={{SearchState, setSearchState}}>
      <SearchSection style={SearchState.active ? mystyle1 : {} } onClick={searchActive}>
      <Search/>
      </SearchSection>
      </SearchContext.Provider>
      <NavProdContext.Provider value={{ NavProducto, setNavProducto }}>   
      <NavProductos>
        <NavProd>
        </NavProd>
      </NavProductos>
      <ProductosMain>
      </ProductosMain>
      </NavProdContext.Provider>
    </MainSection>
  
 );
}

export default Main;
