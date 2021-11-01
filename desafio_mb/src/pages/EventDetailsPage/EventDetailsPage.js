import React from "react";
import {useParams} from "react-router-dom"

const EventDetailsPage = () => {
  const params = useParams ()
  console.log(params)
  return (
    <div>
      EventDetails
    </div>
  );
}

export default EventDetailsPage;
