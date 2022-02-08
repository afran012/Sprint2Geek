import React /*, { useState }*/ from 'react'
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

export const AppRouter = () => {
    return (
        <div>
            <Router>
            <Carrito/>
            <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/add" element={<AddProducts/>}/>
                    <Route exact path="/Guajolotas" element={<Guajolotas/>}/>
                    <Route exact path="/Bebidas" element={<Bebidas/>}/>
                    <Route exact path="/Tamales" element={<Tamales/>}/>
                    <Route exact path="/Carrito" element={<Carrito/>}/>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </div>
    )
}
