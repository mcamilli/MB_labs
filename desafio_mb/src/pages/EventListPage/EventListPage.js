import React, { useContext, useEffect } from "react";
import { CardContainer, ScreenContainer } from "./styled";
import EventCard from "../../components/EventCard/EventCard"
import { goToEventListDetails } from "../../router/coordinator";
import { useHistory } from "react-router";
import SearchBar from "../../components/SearchBar/SearchBar";
import  {ProductContext}  from "../../components/ProductsList/ProductContext";



const EventListPage = () => {
  const history = useHistory () 
  const context = useContext(ProductContext)
  
    const onClickCard = (title) => {
      goToEventListDetails(history, title)
      } 

        const productList = context.map((product) => {
            return (
            <EventCard
            onClick={ () => onClickCard(product.title)}
            image={product.image} 
            title={product.title}
            data={product.data}
            price={product.price} 
            local={product.local} 
            id={product.id} 
            key={product.id} 
            />   
            )
        })
 
  return (
    <ScreenContainer>   
      <CardContainer>       
        < SearchBar placeholder = "Buscar evento" data={context}/>            
         {productList}              
      </CardContainer> 
    </ScreenContainer>
  );
}

export default EventListPage;
