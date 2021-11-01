/* import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { BsFillCalendarFill, BsFillPinMapFill } from "react-icons/bs";

const DetailCard = (props) => {
  return (
    <Card sx={{ width: 450, margin: "20px" }}>
      <CardActionArea onClick={props.onClick}>
        <CardMedia
          component= {"img"}
          alt= {props.title}
          height={"150px"}
          image={props.image}
          title={props.title}
          id={props.id}                            
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align={"center"}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align={"center"}>
            <BsFillCalendarFill/> {props.data} 
            <br/>           
            <BsFillPinMapFill/> {props.local}
          </Typography>
          </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default EventCard */