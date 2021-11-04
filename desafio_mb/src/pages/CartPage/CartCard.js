import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BsFillCalendarFill, BsFillPinMapFill, BsCoin } from "react-icons/bs";


const CartCard = (props) => {
  return (
    <Card sx={{ width: 250, margin: "20px" }}>      
        <CardContent>
          <Typography gutterBottom variant="body2" color="text.secondary" component="div" align={"center"}>
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
          </Card>
         
  );
}

export default CartCard