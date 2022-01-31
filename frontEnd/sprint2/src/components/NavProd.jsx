import React from 'react';
import { Link } from "react-router-dom";
import { Head, NavB, NavUl, NavLi } from '../styles/styleds/NavProdStyled';



export const NavProd = () => {
    return (
        <Head>
            <NavB>
                <NavUl>
                    <NavLi>

                        <h3>Guajolotas</h3>

                    </NavLi>
                    <NavLi>
                        <h3>Bebidas</h3>

                    </NavLi>
                    <NavLi>
                        <h3>Tamales</h3>

                    </NavLi>
                </NavUl>
            </NavB>
        </Head>
    )
}