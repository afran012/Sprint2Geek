import React, { useContext/*, useState */} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import querystring from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getProductsByName } from '../../selector/GetProductsByName';
import ProductsContext from '../../context/ProductsContext';
import ProductCard from '../ProdComponents/ProductCard';
import styled from 'styled-components';
import SearchContext from '../../context/SearchContext';

const SearchResultsContainer = styled.section `
    display : none;

`

const mystyle = {
    display: "inline"
  };

const SearchForm = () => {
    const {SearchState/*, setSearchState*/} = useContext(SearchContext)

    const {Productos/*, setProductos*/} = useContext(ProductsContext)

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
        <div>
        <form className='formContainer' id="formulario" onSubmit={handleSearch}>
            <div>
                <input 
                className='inputForm'
                type="text" 
                autoComplete="off" 
                placeholder="Busca Tu Guajolota Favorita" 
                name="searchText" 
                value={searchText}
                onChange={handleInputChange}/>
            </div>
            <div className='btnForm'>
                <button type='submit' id="btnRegistro">Enviar</button> 
            </div>
        </form>

        <SearchResultsContainer  style={SearchState.active ? mystyle : {} }>
        <>        {
            ProdGuajoFiltered.map(prod => (
                <ProductCard key={prod.id}
                    {...prod} />
            ))
            }
        </>
        <>        {
            ProdTamalFiltered.map(prod => (
                <ProductCard key={prod.id}
                    {...prod} />
            ))
            }
        </>
        <>        {
            ProdBebidaFiltered.map(prod => (
                <ProductCard key={prod.id}
                    {...prod} />
            ))
            }
        </>
        
        </SearchResultsContainer>
       
        </div>
        );
};

export default SearchForm;
