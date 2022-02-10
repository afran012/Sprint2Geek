import React, { useContext } from 'react'
import styled from 'styled-components';
import BodyCarrido from '../components/carrito/BodyCarrido';
import HeaderCarrito from '../components/carrito/HeaderCarrito';
import CartContext from '../context/CartContext';


const mystyle1 = {
    display:"inline" ,
    color: "black",
    backgroundColor: "#F2F2F2",
    padding: "10px",
    fontFamily: "Arial",
    position: "absolute",
    top: "12%",
    height: "100vh",
    width: "100%",
  };

const mystyle2 = {
      display:"none"      
};


const CarritoSection = styled.section `

`



const Carrito = () => {

    const {ActiveCarrito/*, setActiveCarrito*/} = useContext(CartContext)

  return (
    <div>
        <CarritoSection style={ActiveCarrito.active ? mystyle1 : mystyle2 }>
            <h1>CARRITO</h1>
            <HeaderCarrito></HeaderCarrito>
            <BodyCarrido></BodyCarrido>
        </CarritoSection>
    </div>)
}

export default Carrito