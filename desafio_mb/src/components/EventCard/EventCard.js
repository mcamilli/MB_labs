import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { BsFillCalendarFill, BsFillPinMapFill, BsCoin } from "react-icons/bs";

const EventCard = (props) => {
  return (
    <Card sx={{ width: 400, margin: "20" }}>
      <CardActionArea onClick={props.onClick}>
        <CardMedia
          component= {"img"}
          alt= {props.title}
          height={"150px"}
          image={props.image}
          title={props.title}
          price={props.price} 
          id={props.id} 
          description={props.description}                           
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align={"center"}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align={"center"}>
            <BsFillCalendarFill/> {props.data} 
            <br/>           
            <BsFillPinMapFill/> {props.local}
            <br/>
            <BsCoin/> {props.price}

          </Typography>
          </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default EventCard