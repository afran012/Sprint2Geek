import React, { useEffect, useState } /*, { useState }*/ from 'react'
import {BrowserRouter as Router, 
    Routes,
    Navigate,
    Route} 
    from 'react-router-dom';
import { Navbar } from '../components/main/Navbar';
import Main from '../containers/Main';
import AddProducts from '../containers/AddProducts';
import { getData } from '../helpers/getData';
import { url } from '../helpers/url';
import ProductsContext from '../context/ProductsContext';
import Carrito from '../containers/Carrito';
import CartContext from '../context/CartContext';

export const AppRouter = () => {

    const [ActiveCarrito, setActiveCarrito] = useState({
        active : false,
        productos:[],
        total:0        
    })     


    const [Productos, setProductos] = useState({
        bebidas : [],
        guajolotas: [],
        tamales: [],
    });

    const traerDatos = async () => {
        const datos = await getData(`${url}Productos`);
        setProductos(datos);
        // return datos;
    };
    //traerDatos()


    useEffect(() => {
    traerDatos()
    //setNavProducto(bebidas)
    
    }, []);

    return (
        <div>
            <Router>
            <CartContext.Provider value={{ActiveCarrito, setActiveCarrito}}>
            <Carrito/>
            <Navbar/>
            
            <ProductsContext.Provider value={{ Productos, setProductos }} >
                <Routes>                    
                        <Route exact path="/" element={<Main/>}/>
                        <Route exact path="/add" element={<AddProducts/>}/>
                        <Route path="*" element={<Navigate to="/" />} />                    
                </Routes>
            </ProductsContext.Provider>
            </CartContext.Provider>
            </Router>
        </div>
    )
}
