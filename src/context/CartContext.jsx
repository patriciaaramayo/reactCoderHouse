import React from 'react'
import { useContext } from 'react';
import { createContext, useState } from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        let carritoprevio = [...cart];
        if (IsInCart(item.producto.id)) {
            carritoprevio.find((i) => i.item.producto.id === item.producto.id).item.cantidad += item.cantidad;
            setCart(carritoprevio);
        }
        else {
            setCart([...cart, { item }])
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
        return cart.reduce((acum, i) => acum + i.item.cantidad * i.item.producto.precio, 0)
    }

    const IconCart = () => {
        return cart.reduce((acum, i) => acum + i.item.cantidad, 0)
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