import React, { useContext } from 'react';
import CountCarruContext from '../../context/CountCarruContext';
import ProductsContext from '../../context/ProductsContext';
import '../../styles/css/Carrousel.css'

import CarrouselImg from './CarrouselImg';



const Carrousel = ({index = 3}) => {

  
    const { Count, setCount } = useContext(CountCarruContext);

    const {Productos/*, setProductos*/} = useContext(ProductsContext)

  return (
      <>
        <>{Count.value }</>
        <CarrouselImg></CarrouselImg>
        

      </>

  );
};

export default Carrousel;
