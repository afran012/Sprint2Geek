import React from 'react';

const ProductCard = ({
    id,
    product,
    imagen,
    precio
}) => {


  return <div>{id} {product} {imagen} {precio}</div>;
};

export default ProductCard;
