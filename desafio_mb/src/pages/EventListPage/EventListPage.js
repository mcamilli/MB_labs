import React, { useEffect, useState } from "react";
import { CardContainer, ScreenContainer } from "./styled";
import EventCard from "../../components/EventCard/EventCard"
import { goToEventListDetails } from "../../router/coordinator";
import { useHistory } from "react-router";
import itens from "../../components/EventCard/EventItem";
import SearchBar from "../../components/SearchBar/SearchBar";


const EventListPage = () => {
  const history = useHistory () 
  const [events, setEvents] = useState ([])
  
    const onClickCard = (id) => {
        goToEventListDetails(history, id)
    } 
     const eventList = itens.eventItem.map((item) => {
      return(
        <EventCard  
        onClick = {() => onClickCard(item.id)}
         image={item.image} 
         title={item.title}
          data={item.data} 
          local={item.local} 
          id={item.id} 
          key={item.id}          
          />
      )
    })  
        useEffect (() => {
          setEvents(eventList)
        },[])

  return (
    <ScreenContainer>   
      <CardContainer>       
        < SearchBar placeholder = "Buscar evento" data={itens.eventItem} /> 
         {events}                     
      </CardContainer> 
    </ScreenContainer>
  );
}

export default EventListPage;
