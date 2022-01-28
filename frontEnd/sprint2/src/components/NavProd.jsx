import React from 'react';
import { Link } from "react-router-dom";
import { Head, NavB, NavUl, NavLi } from '../styles/styleds/NavProdStyled';



export const NavProd = () => {
    return (
        <Head>
            <NavB>
                <NavUl>
                    <NavLi>
                    <Link className="link" to="/Carrito">
                        <h3>Guajolotas</h3>

                    </Link>
                    </NavLi>
                    <NavLi>
                    <Link className="link" to="/Carrito">
                        <h3>Bebidas</h3>

                    </Link>
                    </NavLi>
                    <NavLi>
                    <Link className="link" to="/Carrito">
                        <h3>Tamales</h3>

                    </Link>
                    </NavLi>
                </NavUl>
            </NavB>
        </Head>
    )
}