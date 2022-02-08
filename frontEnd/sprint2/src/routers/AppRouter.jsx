import React, { useEffect, useState } /*, { useState }*/ from 'react'
import {BrowserRouter as Router, 
    Routes,
    Navigate,
    Route} 
    from 'react-router-dom';
import { Navbar } from '../components/main/Navbar';
import Main from '../containers/Main';
import Guajolotas from '../containers/Guajolotas';
import Bebidas from '../containers/Bebidas';
import Tamales from '../containers/Tamales';
import Carrito from '../containers/Carrito';
import AddProducts from '../containers/AddProducts';
import { getData } from '../helpers/getData';
import { url } from '../helpers/url';
import ProductsContext from '../context/ProductsContext';

export const AppRouter = () => {
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
      
      useEffect(() => {
        traerDatos()
        //setNavProducto(bebidas)
        
      }, []);

    return (
        <div>
            <Router>
            <Carrito/>
            <Navbar/>
            <ProductsContext.Provider value={{ Productos, setProductos }} >
                <Routes>
                    
                        <Route exact path="/" element={<Main/>}/>
                        <Route exact path="/add" element={<AddProducts/>}/>
                        <Route exact path="/Guajolotas" element={<Guajolotas/>}/>
                        <Route exact path="/Bebidas" element={<Bebidas/>}/>
                        <Route exact path="/Tamales" element={<Tamales/>}/>
                        <Route exact path="/Carrito" element={<Carrito/>}/>
                        <Route path="*" element={<Navigate to="/" />} />
                    
                </Routes>
            </ProductsContext.Provider>
            </Router>
        </div>
    )
}
