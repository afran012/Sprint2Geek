import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductsContext from '../../context/ProductsContext';
import useCounter from '../../hooks/UseCounter';
import '../../styles/css/Carrousel.css'

const CarrouselContainer = styled.section `


    display:grid;
    background-color: aqua;    
    width: 100%;
    //height: 100%;
    height: 303px;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 100%;
    img {
        max-width: 100%;
        max-height: 100%;
    }
    .carrouselImg1 {
        grid-area: 1/1/2/2;  
    }
    .carrouselImg2 {
        grid-area: 1/2/2/3;  
    }
    .carrouselImg3 {
        grid-area: 1/3/2/4;  
    }
`

const Carrousel = ({index = 1}) => {
    //let numero = 0
    const { counter, handleSumar } = useCounter(index);
    const {Productos/*, setProductos*/} = useContext(ProductsContext)

    const handlePosition = (position=0) =>{

    }
    const handleLeft = ()=>{
        handleSumar()
        console.log(counter)

        
    }
    const handleRight = ()=>{
        console.log("right");
        
    }

  return (
    <CarrouselContainer className='CarrouselContainer'>
        <img className='carrouselImg1' src='https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700044/guappjolotas/verde_dcimlm.png' alt='...' onClick={()=>{handleLeft()}} />
        <img className='carrouselImg2' src='https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700044/guappjolotas/Mole_quk0tw.png' alt='...' />
        <img className='carrouselImg3' src='https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700043/guappjolotas/guayaba_buucjt.png' alt='...' onClick={()=>{handleRight()}} />
    </CarrouselContainer>
  );
};

export default Carrousel;
