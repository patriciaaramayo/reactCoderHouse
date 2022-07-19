import React from 'react'
import { useContext } from 'react';
import { createContext, useState } from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        let previousCart = [...cart];
        if (IsInCart(item.product.id)) {
            previousCart.find((i) => i.item.product.id === item.product.id).item.quantity += item.quantity;
            setCart(previousCart);
        }
        else {
            setCart([...cart, { item }])
        }
    }

    const IsInCart = (id) => {
        return cart && cart.some((i) => i.item.product.id === id)
    }

    const EmptyCart = () => {
        setCart([])
    }
    const RemoveItem = (id) => {
        const items = cart.filter((product) => product.item.product.id !== id)
        setCart(items)
        return
    }
    const PriceTotal = () => {
        return cart.reduce((acum, i) => acum + i.item.quantity * i.item.product.price, 0)
    }

    const IconCart = () => {
        return cart.reduce((acum, i) => acum + i.item.quantity, 0)
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