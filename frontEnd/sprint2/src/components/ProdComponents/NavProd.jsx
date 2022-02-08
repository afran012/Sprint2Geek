import React, { useContext } from 'react';
import { NavProdContext } from '../../context/NavProdContext';
import { Head, NavB, NavUl, NavLi } from '../../styles/styleds/NavProdStyled';

const handClick = (sel) =>{
    
    let btnGuajo = document.querySelectorAll(".navh3")
    btnGuajo.forEach((element)=>{
        element.style.color = '#9A9A9D'
        element.style.textDecoration= "none";

    })
    let btnSel = document.querySelector(`.${sel}`)
    btnSel.style.color = '#FA4A0C'
    btnSel.style.textDecoration= "underline";

}


export const NavProd = () => {

    const { NavProducto , setNavProducto} = useContext(NavProdContext);





    return (
        <Head>
            <NavB>
                <NavUl className='prodNavbar'>
                    <NavLi onClick={()=>{handClick("NavGuajo");setNavProducto({selectProd:"guajolotas"})}}>

                        <h3 className='NavGuajo navh3' >Guajolotas</h3>

                    </NavLi>
                    <NavLi onClick={()=>{handClick("NavBebi");setNavProducto({selectProd:"bebidas"})}}>
                        <h3 className='NavBebi navh3' >Bebidas</h3>

                    </NavLi>
                    <NavLi onClick={()=>{handClick("NavTama");setNavProducto({selectProd:"tamales"})}}>
                        <h3 className='NavTama navh3' >Tamales</h3>

                    </NavLi>
                </NavUl>
            </NavB>
        </Head>
    )
}