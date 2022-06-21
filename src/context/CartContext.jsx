import React from 'react'
import { useContext } from 'react';
import { createContext, useState } from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (item) => {
        if (IsInCart(item.producto.id))
            alert("El producto ya se encuentra en el carrito")
        else {
            setCart([  ...cart, { item}] )
            alert("Se agrego el producto correctamente")
        }
    }

    const IsInCart = (id) => {
       return cart && cart.some((i) => i.item.producto.id === id)
    }

    const EmptyCart = () => {
        setCart([])
    }
    const RemoveItem = (id) => {
        const items = cart.filter((product) => product.item.producto.id !== id)
        setCart(items)
        return 
    }
    const PriceTotal = () => {
       return cart.reduce((acum,i) => acum + i.item.cantidad * i.item.producto.precio, 0)
    }

    //para el numero del carrito
    const IconCart = () => { 
      return cart.reduce((acum,i) => acum + i.item.cantidad, 0)
    }

    return (
        <CartContext.Provider
            value={{
                addToCart,
                cart,
                EmptyCart,
                RemoveItem,
                PriceTotal,
                IconCart
            }}
        >
            {children}
        </CartContext.Provider>
    )

}