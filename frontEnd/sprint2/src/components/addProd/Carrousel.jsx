import React, { useContext, useEffect, useState } from 'react';
import ProductsContext from '../../context/ProductsContext';
import '../../styles/css/Carrousel.css'
import { CarrouselContainer } from '../../styles/styleds/CarrouselStyled';



const Carrousel = ({index = 3}) => {

  
    const [Count, setCount] = useState({value:index});
    const {Productos/*, setProductos*/} = useContext(ProductsContext)

   // console.log(Productos.guajolotas[0].imagen);

    
    const [ImgPositions, setImgPositions] = useState({img0:Count.value,img1:Count.value+1,img2:Count.value+2});

    const handlePosition = async() =>{
        
        if (Count.value>0) {
            await setImgPositions({img0:Count.value,img1:Count.value+1,img2:Count.value+2})            
        }
        console.log(Count.value, ImgPositions);

    }

    const handleLeft = async ()=>{
        console.log(Count.value);
        if (Count.value>=0) {            
            await setCount({value:Count.value-1})
            await setImgPositions({img0:Count.value,img1:Count.value+1,img2:Count.value+2}) 
            await handlePosition()
        }

    }

    const handleRight = async ()=>{
        if (Count.value<7) {
            await setCount({value:Count.value+1})
            await setImgPositions({img0:Count.value,img1:Count.value+1,img2:Count.value+2}) 
            console.log(Count.value)
            await handlePosition()            
        } else {
            console.log("right");
        }                 
    }

    useEffect(() => {
        console.log(ImgPositions);
        //handlePosition()
      return () => {
        console.log("dismountCarusel");
        console.log(ImgPositions);
      };
    }, [ ImgPositions]);
    

  return (
      <>
        <>{ImgPositions.img0}</>
        <CarrouselContainer className='CarrouselContainer'>
        <img className='carrouselImg1' src='https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700044/guappjolotas/verde_dcimlm.png' alt='...' onClick={()=>{handleLeft()}} />
        <img className='carrouselImg2' src='https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700044/guappjolotas/Mole_quk0tw.png' alt='...' />
        <img className='carrouselImg3' src='https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700043/guappjolotas/guayaba_buucjt.png' alt='...' onClick={()=>{handleRight()}} />
        </CarrouselContainer>
      </>

  );
};

export default Carrousel;
