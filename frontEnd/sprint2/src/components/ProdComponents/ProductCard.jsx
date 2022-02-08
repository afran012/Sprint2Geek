import React from 'react';
import styled from 'styled-components';

const ProductCardDiv = styled.section `
    margin: 5%;

    background-color: #FFFFFF;
    border-radius: 20px;
    //border-width: 1px;
    // border-style: solid;
    // border-color: black;
    width: 90%;
    height: 112px;
    display: grid; 
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 100% ;
    align-self: center;
    justify-self: center;

    img{
        //width: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: 20px;
    }

`

const ProductCard = ({
    id,
    product,
    imagen,
    precio
}) => {


  return (<ProductCardDiv key={id}>
    <img src={imagen} alt="..."/>
    <section>
        <p>{product}</p>
        <p>{precio}</p>
    </section>
    

    </ProductCardDiv>);
};

export default ProductCard;
