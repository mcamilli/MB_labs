import React, {useContext} from "react";
import {useParams} from "react-router-dom"
import EventCardDetails from "./styled";
import { CardContainer, ScreenContainer } from "../EventListPage/styled";
import  {ProductContext}  from "../../components/ProductsList/ProductContext";
import { CartContext } from "../../components/CartContext/CartContext";


const EventDetailsPage = () => {  
  const context = useContext(ProductContext)
  const cart = useContext(CartContext)
  const id = useParams ()

  const onClickCart = () => {
    cart.addToCart(id)
  }
  console.log (cart)

  

  const itemDetail = context.map((product) => {
    return (     
      <EventCardDetails
        onClick = {() => onClickCart (product.id)}
        image={product.image}
        title={product.title}
        data={product.data}
        local={product.local}
        id={product.id}
        description={product.description}
        key={product.id} />  
    )      
  }) 
  return (
    <ScreenContainer>   
    <CardContainer> 
    {itemDetail}
    </CardContainer> 
    </ScreenContainer>   
    
  )
}
export default EventDetailsPage;
