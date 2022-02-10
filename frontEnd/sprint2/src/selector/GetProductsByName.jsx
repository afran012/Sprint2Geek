

export const getProductsByName = ( name = '', productos ) => {


    name = name.toLocaleLowerCase();
    return productos.filter( prod => prod.product.toLocaleLowerCase().includes( name )  );

}