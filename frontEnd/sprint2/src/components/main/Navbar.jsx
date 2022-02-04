import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import '../../styles/css/Nav.css'

const Head = styled.header`
    height: 88px;
    //background-color: #FEFEFE;
    display:  flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.img `
    width:20%;
    

`
const LogoSection = styled.section`
    //width: 10px;
    //height: 100%;
`
const NavB = styled.nav ``

const NavUl = styled.ul `
    display: flex;
    justify-content:center;
    align-items: center;

`
const NavLi = styled.li `
    color: #332927;
    margin: 10px;

`
const CartImg = styled.img `
    width:100%;
    color: #332927;

`
const LogoutImg = styled.img `
    width:100%;
    color: #332927;

`

export const Navbar = () => {
    return (
        <Head>
            <LogoSection>
                <Link className="link" to="/Main">
                    <Logo src="https://res.cloudinary.com/doueu7nt1/image/upload/v1643335936/Proyecto2/logo_uro5hi.png" alt="/Main" />
                </Link>   
            </LogoSection>

            <NavB>
                <NavUl className='navHead'>
                    <NavLi>
                    <Link className="link" to="/Main">
                        <CartImg src="https://res.cloudinary.com/doueu7nt1/image/upload/v1643341674/Proyecto2/shopping-cart_aotnyy.png" alt="/Main" />
                    </Link>
                    </NavLi>
                    <NavLi>
                    <Link className="exit" to="/">
                        <LogoutImg className="exitimg" src="https://res.cloudinary.com/doueu7nt1/image/upload/v1643916659/Proyecto2/door-closed-solid_wqxvds.svg" alt="/Main" />
                    </Link>
                    </NavLi>
                </NavUl>
            </NavB>

        </Head>
    )
}