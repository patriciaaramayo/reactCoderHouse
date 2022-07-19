import React from "react";
import CartItem from "../CartItem/CartItem"

function CartList({ cart }) {
    return (
        <>
            {cart.map((i) => (
                <CartItem
                    key={i.item.product.id}
                    product={i.item.product}
                    cant={i.item.quantity}
                />
            ))}
            
        </>
    )
}

export default CartList