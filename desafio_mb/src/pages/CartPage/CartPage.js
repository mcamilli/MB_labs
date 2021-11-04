import React, { useState, useContext } from "react";
import { CartContext } from "../../components/CartContext/CartContext";
import { CardContainer, ScreenContainer } from "../EventListPage/styled";
import CartCard from "./CartCard";
import { Button } from '@mui/material';

const CartPage = () => {
 const {cart} = useContext(CartContext)  
console.log ("cart", cart)


const cartProducts = cart.map ((cartProduct) => {  
  console.log ("isso é umcartproduc", cartProduct[0])
  return (
     <CartCard
      title={cartProduct[0].title}
      data = {cartProduct[0].data}
      local = {cartProduct[0].local}
      price = {cartProduct[0].price}
      />        
  )
})


  return (
    <ScreenContainer>
      <CardContainer>
      {cartProducts}
      <Button> Finalizar compra</Button>
      </CardContainer>
    </ScreenContainer>
  );
}

export default CartPage;
