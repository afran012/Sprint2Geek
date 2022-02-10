import React, { memo, useCallback, useContext, useEffect } from 'react';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';

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

const CarritoCard = memo(({id,product,imagen,precio}) => {

    const {ActiveCarrito, setActiveCarrito} = useContext(CartContext)



    // eslint-disable-next-line react-hooks/exhaustive-deps
    const traerCarrito = useCallback(() => {
        //console.log({id,product,imagen,precio})        
        console.log(ActiveCarrito.productos);
        let {active , productos , total } = ActiveCarrito
        console.log(productos);
        console.log(productos.length);
        if (productos.length===0) {
            console.log(ActiveCarrito);
            setActiveCarrito({
                active : active,
                productos:[{id,product,imagen,precio}],
                total:(total+precio)
            })
            console.log(ActiveCarrito);            
        }
        else {
            let {active , productos , total } = ActiveCarrito
            let arrayElements = productos
            arrayElements.push({id,product,imagen,precio})
            console.log(ActiveCarrito);
            console.log(arrayElements);
            setActiveCarrito({
                active : active,
                productos:arrayElements,
                total:(total+precio)
            })
            console.log(ActiveCarrito);
            
        }
        //arrayProductos = arrayProductos.push({id,product,imagen,precio})
        //console.log(arrayProductos);        
    })

    useEffect(() => {
      console.log(ActiveCarrito);
    
      return () => {
        console.log(ActiveCarrito);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    


  return (<ProductCardDiv>
    <img src={imagen} alt="..."/>
    <section  className='descriptionP'>
        <p className='nameP'>{product}</p>
        <p className='priceP'>{precio}</p>
    </section>
    <button className='btnCarrito' onClick={traerCarrito}>Carrito</button>
    </ProductCardDiv>);
});

export default CarritoCard