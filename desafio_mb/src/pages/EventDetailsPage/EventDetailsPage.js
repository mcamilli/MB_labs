import React, {useContext} from "react";
import {useParams} from "react-router-dom"
import EventCardDetails from "./styled";
import { CardContainer, ScreenContainer } from "../EventListPage/styled";
import  {ProductContext}  from "../../components/ProductsList/ProductContext";
import { CartContext } from "../../components/CartContext/CartContext";


const EventDetailsPage = () => {  
  const context = useContext(ProductContext)
  const {cart, addToCart} = useContext(CartContext)
  const title = useParams ()

  const onClickCart = () => {
    addToCart(filteredProduct)
  }
  const filteredProduct = context.filter((p => p.title === title.title))

  const itemDetail = filteredProduct.map((product) => {
    return (     
      <EventCardDetails
        onClick = {() => onClickCart ()}
        image={product.image}
        title={product.title}
        data={product.data}
        local={product.local}
        id={product.id}
        price={product.price} 
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
