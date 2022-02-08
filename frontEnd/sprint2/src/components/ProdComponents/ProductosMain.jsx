import React, { useCallback, useContext, useEffect } from 'react';
import {NavProdContext} from '../../context/NavProdContext';
import ProductsContext from '../../context/ProductsContext';
import ProductCard from './ProductCard';

const ProductosMain = () => {
  //console.log(products);
  const {Productos/*, setProductos*/} = useContext(ProductsContext)
  const { NavProducto /*, setNavProducto*/} = useContext(NavProdContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkNavProduct = useCallback(()=> {
    //console.log("entro")
    if (NavProducto.selectProd==="guajolotas") {
      return Productos.guajolotas 
    }
    if (NavProducto.selectProd==="bebidas") {
      return Productos.bebidas 
    }
    if (NavProducto.selectProd==="tamales") {
      return Productos.tamales 
    }
  })

  let { selectProd } = NavProducto

  useEffect(() => {
    checkNavProduct()   
  }, [checkNavProduct, selectProd]);
  
  return (
    <>
      {
        checkNavProduct().map(prod => (
            <ProductCard key={prod.id}
                {...prod} />
        ))
        }
    </>
  );
};

export default ProductosMain;
