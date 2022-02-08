import React, { useState } from 'react';

const SearchForm = () => {

    const [producto, setProducto] = useState({
        product: '',
        imagen: '',
        precio: ''
    })

    const { product /*, imagen , precio*/} = producto;

    const postData = () => {

        
   }

   const handleChanged = ({target}) => {
       setProducto({
         ...producto,
         [target.name]: target.value
       })
   
     }

     const handleSubmit = (e) => {
      e.preventDefault();
     }


    return(
        <div>
        <form id="formulario" onSubmit={handleSubmit}>
        <hr/>
            <div>
                <input id="inputNombre" autoComplete="off" placeholder="Busca Tu Guajolota Favorita" name="product" value={product} onChange={handleChanged}/>
            </div>
            <div>
                <button onClick={() => postData()} id="btnRegistro">Enviar</button> 
            </div>
        </form>
        </div>
        );
};

export default SearchForm;
