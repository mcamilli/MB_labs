import React from "react";
import {useParams} from "react-router-dom"
import EventCardDetails from "./styled";
import itens from "../../components/EventCard/EventItem";
import { CardContainer, ScreenContainer } from "../EventListPage/styled";
import { useHistory } from "react-router";


const EventDetailsPage = () => {
  const history = useHistory () 
  const id = useParams ()
  console.log(id)

  const onClickCart = (id) => {
    console.log ("cliquei", id)
    
  }

  const itemDetail = itens.eventItem.map((item) => {
    return (     
      <EventCardDetails
        onClick = {() => onClickCart (item.id)}
        image={item.image}
        title={item.title}
        data={item.data}
        local={item.local}
        id={item.id}
        description={item.description}
        key={item.id} />  
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
