import React from 'react';
import { Head, NavB, NavUl, NavLi } from '../styles/styleds/NavProdStyled';

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
    return (
        <Head>
            <NavB>
                <NavUl className='prodNavbar'>
                    <NavLi onClick={()=>handClick("NavGuajo")}>

                        <h3 className='NavGuajo navh3' >Guajolotas</h3>

                    </NavLi>
                    <NavLi onClick={()=>handClick("NavBebi")}>
                        <h3 className='NavBebi navh3' >Bebidas</h3>

                    </NavLi>
                    <NavLi onClick={()=>handClick("NavTama")}>
                        <h3 className='NavTama navh3' >Tamales</h3>

                    </NavLi>
                </NavUl>
            </NavB>
        </Head>
    )
}