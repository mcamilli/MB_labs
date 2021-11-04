import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext ()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


    const addToCart = (product)=> {
        setCart ([...cart, product])
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }  
        
 return (
     <CartContext.Provider value ={{cart, addToCart}}>
         {children}
     </CartContext.Provider>
 )
}
