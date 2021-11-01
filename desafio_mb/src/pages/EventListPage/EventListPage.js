import axios from "axios";
import React, { useEffect, useState } from "react";
import ActionAreaCard, { CardContainer, ScreenContainer } from "./styled";
import EventCard from "../../components/EventCard/EventCard"

const EventListPage = () => {
/*   const [events, setEvents] = useState()

  useEffect (() => {
    axios
    .get( "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=2PSwA5uTBdEGMUh04dAwaBPp1GHoEDDZ")
    
  .then ((res) => {
    console.log (res.data._embedded.events)
    setEvents (res.data._embedded.events)
  })
  .catch ((err) => {
    console.log (err)
  })
  }, [])


  const eventCards = events.map ((event) => {
    return (
      <p>{event.name}</p>
    )
  }) */

  return (
    <ScreenContainer>   
      <CardContainer>   
        <EventCard
          image={"https://i.scdn.co/image/ab6761610000e5eba8be16a95c2cc4950cbaa8d8"}
          title={"Rammstein"}
          data={"01/12/2021"}
          local={"Morumbi"}
        />
        <EventCard
          image={"https://townsquare.media/site/366/files/2014/09/Clutch.jpg?w=980&q=75"}
          title={"Clutch"}
          data={"02/12/2021"}
          local={"Campo de Marte"}
        />
        <EventCard
          image={"https://cdn.wegow.com/media/artists/bad-religion/bad-religion-1514392928.57.2560x1440.jpg"}
          title={"Bad Religion"}
          data={"03/12/2021"}
          local={"Allianz Parque"}
        />
      </CardContainer> 
    </ScreenContainer>
  );
}

export default EventListPage;
