import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from "styled-components"

const ActionAreaCard = () => {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" width = "450px">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Data do evento
          </Typography>          
          <Typography variant="body2" color="text.secondary">
            Local do evento
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard

export const ScreenContainer = styled.div ` 
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
`

export const CardContainer = styled.div `
display: flex;
flex-direction: column;
width: 80vw;
max-width: 450px;
align-items: center;
margin-bottom: 20px;
margin: 20px;
`

