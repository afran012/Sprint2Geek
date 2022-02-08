import React, { /*useContext,*/ useEffect, useState } from 'react';
import styled from 'styled-components';
//import ProductsContext from '../../context/ProductsContext';
//import useCounter from '../../hooks/UseCounter';
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

const Carrousel = ({index = 3}) => {

  
    const [Count, setCount] = useState({value:index});
    //const {Productos/*, setProductos*/} = useContext(ProductsContext)

   // console.log(Productos.guajolotas[0].imagen);

    
    /*const [ImgPositions, setImgPositions] = useState({
        img0:0,
        img1:0,
        img2:0
    });*/

    const handlePosition = () =>{
        console.log(Count.value);

    }

    const handleLeft = ()=>{
        console.log(Count.value);
        if (Count.value>0) {            
            setCount({value:Count.value-1})
            handlePosition()
        } 
    }

    const handleRight = ()=>{
        if (Count.value<7) {
            setCount({value:Count.value+1})
            console.log(Count.value)            
        } else {
            console.log("right");
        }                 
    }

    useEffect(() => {
        console.log(Count.value);
    
      return () => {
        console.log("dismountCarusel");
      };
    }, [Count]);
    

  return (
    <CarrouselContainer className='CarrouselContainer'>
        <img className='carrouselImg1' src='https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700044/guappjolotas/verde_dcimlm.png' alt='...' onClick={()=>{handleLeft()}} />
        <img className='carrouselImg2' src='https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700044/guappjolotas/Mole_quk0tw.png' alt='...' />
        <img className='carrouselImg3' src='https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700043/guappjolotas/guayaba_buucjt.png' alt='...' onClick={()=>{handleRight()}} />
    </CarrouselContainer>
  );
};

export default Carrousel;
