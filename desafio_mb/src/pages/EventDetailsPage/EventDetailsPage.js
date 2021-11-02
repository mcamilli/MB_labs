import React, {useContext} from "react";
import {useParams} from "react-router-dom"
import EventCardDetails from "./styled";
import { CardContainer, ScreenContainer } from "../EventListPage/styled";
import  {ProductContext}  from "../../components/ProductsList/ProductContext";


const EventDetailsPage = () => {  
  const id = useParams ()  
  const context = useContext(ProductContext)
 
  const onClickCart = (id) => {
      console.log ("cliquei", id)
  }
  
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
