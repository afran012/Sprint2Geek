import React from 'react';
import ProductCard from './ProductCard';

const ProductosMain = ({products}) => {
  return (
    <>
      {
        products.map(prod => (
            <ProductCard key={prod.id}
                {...prod} />
        ))
      }
    </>

  );
};

export default ProductosMain;
