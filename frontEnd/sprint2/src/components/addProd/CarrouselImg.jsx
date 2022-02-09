import React, { memo, useCallback, useContext, useEffect } from 'react';
import CountCarruContext from '../../context/CountCarruContext';
import ProductsContext from '../../context/ProductsContext';
import { CarrouselContainer } from '../../styles/styleds/CarrouselStyled';

const CarrouselImg = memo(() => {

    const { Count, setCount } = useContext(CountCarruContext);
    const {Productos} = useContext(ProductsContext)

    // console.log(Productos.guajolotas[0].imagen);
    let lengthProducts = Productos.guajolotas.length
    //lengthProducts -=1
    //console.log(lengthProducts);
 
     // eslint-disable-next-line react-hooks/exhaustive-deps
     const handleLeft =  useCallback(()=>{
        //console.log(Count.value);
        if (Count.value>1) {            
              setCount({value:Count.value-1})
        }
     })
 
     // eslint-disable-next-line react-hooks/exhaustive-deps
     const handleRight =  useCallback(()=>{

        if (Count.value<lengthProducts) {
            console.log("right");
            setCount({value:(Count.value+1)})
        }
     })

     // eslint-disable-next-line react-hooks/exhaustive-deps
     const imgArray = useCallback(()=>{
        if (lengthProducts===0) {
            //console.log("lengthProducts===0");
            const imagenes = {
                imagen1:"../../assets/bug-solid.svg",
                imagen2:"../../assets/bug-solid.svg",
                imagen3:"../../assets/bug-solid.svg"
            }    
            return imagenes          
         }
        else if (Count.value===lengthProducts) {
            //console.log("Count.value===lengthProducts");
            const imagenes = {
                imagen1:Productos.guajolotas[(Count.value-2)].imagen,
                imagen2:Productos.guajolotas[(Count.value)-1].imagen,
                imagen3:'../../assets/bug-solid.svg'
            } 
            return imagenes          
        }
        else if (Count.value===1) {
            console.log("Count.value===1");
            const imagenes = {
                imagen1:'../../assets/bug-solid.svg',
                imagen2:Productos.guajolotas[(Count.value-1)].imagen,
                imagen3:Productos.guajolotas[(Count.value)].imagen
            } 
            return imagenes          
        }
        else if (Count.value<lengthProducts) {
            console.log("Count.value<lengthProducts");
            const imagenes = {
                imagen1:Productos.guajolotas[(Count.value-2)].imagen,
                imagen2:Productos.guajolotas[(Count.value-1)].imagen,
                imagen3:Productos.guajolotas[(Count.value)].imagen
            }    
            return imagenes
        }
     })

     useEffect(() => {  
        imgArray()
     }, [Count, Productos, imgArray]);
     

  return (
    <CarrouselContainer className='CarrouselContainer'>
    <img className='carrouselImg1' src={imgArray().imagen1} alt='...' onClick={()=>{handleLeft()}} />
    <img className='carrouselImg2' src={imgArray().imagen2} alt='...' />
    <img className='carrouselImg3' src={imgArray().imagen3} alt='...' onClick={()=>{handleRight()}} />
    </CarrouselContainer>
  );
})

export default CarrouselImg;
