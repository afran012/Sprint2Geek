import React, { memo } from 'react';
import styled from 'styled-components';


const ProductCardDiv = styled.section `
    margin: 5%;

    background-color: #FFFFFF;
    border-radius: 20px;
    width: 90%;
    height: 112px;
    display: grid; 
    grid-template-columns: 30% 55% 15%;
    grid-template-rows: 100% ;
    align-self: center;
    justify-self: center;

    img{
        //width: 100%;
        max-width: 70%;
        max-height: 90%;
        border-radius: 20px;
        align-self: center;
        justify-self: center;
    }

    p{
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.4;
        
    }
    .nameP{
        color: #0D0D0D;
    }
    .priceP{
        color: #FA4A0C;
    }
    .btnCarrito{
        font-family: 'Poppins', sans-serif;
        font-size: 0.5rem;
        font-weight: 400;
        line-height: 1.4;
        align-self: center;
        justify-self: center;
        background-color: #FA4A0C;
        color: white; 
    }
    .descriptionP {
        align-self: center;
        justify-self: center;

    }

    

`

const ProdSearchCard = memo(({id,product,imagen,precio}) => {


  return (<ProductCardDiv key={id}>
    <img src={imagen} alt="..."/>
    <section className='descriptionP'>
        <p className='nameP'>{product}</p>
        <p className='priceP'>{precio}</p>
    </section>
    <button className='btnCarrito'>Carrito</button>
    </ProductCardDiv>);
});

export default ProdSearchCard;
