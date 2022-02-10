import React, { memo, useCallback, useContext, useEffect } from 'react'
import styled from 'styled-components'
import CartContext from '../../context/CartContext'
//import ProductCard from '../ProdComponents/ProductCard'
import CarritoCard from './CarritoCard'

const PrecioTotal = styled.section `

`

const ProductosCarrito = styled.section `

`

const BodyCarrido = memo(() => {

  const {ActiveCarrito} = useContext(CartContext)
  
  //console.log(productos)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const traerDatos = useCallback(
    () => {
      if (ActiveCarrito.productos===undefined) {
        return []
        
      }
      /*const {productos} = ActiveCarrito
      console.log(ActiveCarrito);*/
      return ActiveCarrito.productos
    }
  )
  
  
  useEffect(() => {
    traerDatos()
    console.log(traerDatos())
  
    return () => {
      //console.log(productos)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  


  return (
    <div>
        <ProductosCarrito>

          {
            traerDatos().map(prod => (
                <CarritoCard 
                    {...prod} />
            ))
            }

        
        </ProductosCarrito>
        <PrecioTotal>
        </PrecioTotal>

    </div>
  )
})

export default BodyCarrido