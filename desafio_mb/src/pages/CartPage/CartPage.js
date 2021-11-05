import React, {  useContext } from "react";
import { CartContext } from "../../components/CartContext/CartContext";
import { CardContainer, ScreenContainer } from "../EventListPage/styled";
import CartCard from "./CartCard";
import { Button } from '@mui/material';
import { goToLogin } from '../../router/coordinator'
import { useHistory} from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";


const CartPage = () => {
 const {cart, removeFromCart} = useContext(CartContext)  
 const history = useHistory ()
 useProtectedPage ()

 const onClickRemove = () => {
  removeFromCart()
  console.log("remover item", removeFromCart)
}


const cartProducts = cart.map ((cartProduct) => {  
  console.log("produto",cartProduct)
    return (
     <CartCard
     onClick={() => onClickRemove (cartProduct[0].id)}
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
      <Button onClick ={ () => {goToLogin (history)}}> Finalizar compra</Button>
      </CardContainer>
    </ScreenContainer>
  );
}

export default CartPage;
