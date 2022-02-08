import styled from 'styled-components';

export const Head = styled.header`
    height: 88px;
    //background-color: #FEFEFE;
    display:  flex;
    justify-content: center;
    align-items: center;
`
export const NavB = styled.nav `
    width: 100%;
`

export const NavUl = styled.ul `
    width: 100%;
    display: flex;
    justify-content: space-around;

`
export const NavLi = styled.li `
    margin: 10px;
    h3 {
        color: #9A9A9D;
        font-family: 'Inter', sans-serif;
        font-weight: normal;
        font-size: 16px;
        text-align: center;
        text-justify:auto;
        @media only screen and (min-width: 790px) {
            font-size: 50px;
        }
        &:focus {
            color: #FA4A0C;
            text-decoration: underline;

        }
        &:hover {
            text-decoration: underline;
        }
        &:active {
            color: #FA4A0C;
            text-decoration: underline;

        }

        button{
            color: #9A9A9D;
            &:hover {
            text-decoration: underline;
            }
            &:active {
                color: #FA4A0C;
                text-decoration: underline;

            }

        }
        &:active{
            color: #FA4A0C;
            text-decoration: underline;

        }
        &:active{
            color: #FA4A0C;
            text-decoration: underline;

        }
    }

`
