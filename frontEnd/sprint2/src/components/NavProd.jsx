import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Head = styled.header`
    height: 88px;
    background-color: #FEFEFE;
    display:  flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.img `
    width:10%;
    

`
const LogoSection = styled.section`
    //width: 10px;
    //height: 100%;
`
const NavB = styled.nav ``

const NavUl = styled.ul `
    display: flex;

`
const NavLi = styled.li `
    color: #332927;
    margin: 10px;

`
const CartImg = styled.img `
    width:80%;
    color: #332927;

`


export const Navbar = () => {
    return (
        <Head>
            <LogoSection>
                <Link className="link" to="">
                    <Logo src="https://res.cloudinary.com/doueu7nt1/image/upload/v1643335936/Proyecto2/logo_uro5hi.png" alt="" />
                </Link>   
            </LogoSection>

            <NavB>
                <NavUl>
                    <NavLi>
                    <Link className="link" to="/Carrito">
                        <CartImg src="https://res.cloudinary.com/doueu7nt1/image/upload/v1643341674/Proyecto2/shopping-cart_aotnyy.png" alt="" />
                    </Link>
                    </NavLi>
                </NavUl>
            </NavB>

        </Head>
    )
}