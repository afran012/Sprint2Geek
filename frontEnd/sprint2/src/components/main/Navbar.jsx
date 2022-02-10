import React /*, { useState }*/ from 'react';
import { Link } from "react-router-dom";
import '../../styles/css/Nav.css'
import { CartImg, Logo, LogoSection, LogoutImg } from '../../styles/styleds/NavbarStyled';
import { Head, NavB, NavLi, NavUl } from '../../styles/styleds/NavProdStyled';


export const Navbar = () => {
    /*const [cart, setCart] = useState({

    });*/


    return (
        <Head>
            <LogoSection>
                <Link className="link" to="/Main">
                    <Logo src="https://res.cloudinary.com/doueu7nt1/image/upload/v1643335936/Proyecto2/logo_uro5hi.png" alt="/Main" />
                </Link>   
            </LogoSection>

            <NavB>
                <NavUl className='navHead'>
                    <NavLi className='cartImg'>
                    <div className="link" >
                        <CartImg src="https://res.cloudinary.com/doueu7nt1/image/upload/v1643341674/Proyecto2/shopping-cart_aotnyy.png" alt="/" />
                    </div>
                    </NavLi>
                    <NavLi>
                    <Link className="exit" to="/add">
                        <LogoutImg className="exitimg" src="https://res.cloudinary.com/doueu7nt1/image/upload/v1643916659/Proyecto2/door-closed-solid_wqxvds.svg" alt="/Main" />
                    </Link>
                    </NavLi>
                </NavUl>
            </NavB>

        </Head>
    )
}