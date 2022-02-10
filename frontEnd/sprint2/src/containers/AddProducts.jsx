import React, { useState } from 'react';
import Carrousel from '../components/addProd/Carrousel';
import CountCarruContext from '../context/CountCarruContext';


const AddProducts = ({index = 3}) => {
  const [Count, setCount] = useState({value:index});
    
  return (
    
      <>
      <CountCarruContext.Provider value={{Count, setCount}}>
      <Carrousel></Carrousel>
      </CountCarruContext.Provider>
      </>

    );
};

export default AddProducts;
