import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { BsFillCalendarFill, BsFillPinMapFill } from "react-icons/bs";
import { Button } from '@mui/material';

const EventCardDetails = (props) => {
  return (
    <Card sx={{ width: 400, margin: "20px" }}>
      
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
            <br/>
            <Typography gutterBottom variant="p" component="div" align={"center"}>
            Detalhes
            </Typography>
            {props.description}    
            </Typography>
            <br/>
            <Button
              onClick={props.onClick}
              type={"submit"}
              fullWidth
              variant={"contained"}
              color ={"primary"}
            > 
            Adicionar ao Carrinho</Button>
           </CardContent>      
          </Card>
         
  );
}

export default EventCardDetails