import React, { useContext/*, useState */} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import querystring from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getProductsByName } from '../../selector/GetProductsByName';
import ProductsContext from '../../context/ProductsContext';
import styled from 'styled-components';
import SearchContext from '../../context/SearchContext';
import '../../styles/css/search.css'
import ProdSearchCard from './ProdSearchCard';


const SearchResultsContainer = styled.section `
    display : none;

`

const mystyle = {
    display: "inline"
  };

const closeStyle2 = {
display: "none"
};

const closeStyle1 = {
display: "inline"
};




const SearchForm = () => {
    const {SearchState, setSearchState} = useContext(SearchContext)

    const {Productos/*, setProductos*/} = useContext(ProductsContext)


    const changeState = ()=>{

        setSearchState({
            active:false
          })

    }


    const location = useLocation();
    const { q = '' } = querystring.parse(location.search);

    const navigate = useNavigate();

    const [values, handleInputChange] = useForm({
        searchText: q
    })

    const { searchText } = values;


    const ProdGuajoFiltered = getProductsByName(searchText , Productos.guajolotas);
    const ProdTamalFiltered = getProductsByName(searchText , Productos.tamales);
    const ProdBebidaFiltered = getProductsByName(searchText , Productos.bebidas);


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
        console.log(searchText);
    }

    return(
        <div className='searchSection' >
            <form className='formContainer' id="formulario" onSubmit={handleSearch}>
                <div className='formIn'>
                    <input 
                    className='inputForm'   
                    type="text" 
                    autoComplete="off" 
                    placeholder="Sabor de Guajolota" 
                    name="searchText" 
                    value={searchText}
                    onChange={handleInputChange}/>
                </div>
            </form>

            <p className='pCerrar' style={SearchState.active ? closeStyle1 : closeStyle2 } onClick={changeState}>Cerrar</p>

            <SearchResultsContainer  style={SearchState.active ? mystyle : {} }>
            
            <>
        
                    
            {
                ProdGuajoFiltered.map(prod => (
                    <ProdSearchCard key={prod.id}
                        {...prod} />
                ))
                }
            </>
            <h1 className='tittleSearch'>Tamales</h1>
            <>        {
                ProdTamalFiltered.map(prod => (
                    <ProdSearchCard key={prod.id}
                        {...prod} />
                ))
                }
            </>
            <h1 className='tittleSearch'>Bebidas</h1>
            <>        {
                ProdBebidaFiltered.map(prod => (
                    <ProdSearchCard key={prod.id}
                        {...prod} />
                ))
                }
            </>
            
            </SearchResultsContainer>
        
        </div>
        );
};

export default SearchForm;
