import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { goToEventList, goToLogin, goToCart } from '../router/coordinator';
import {useHistory} from "react-router-dom"
import { BsCart3 } from "react-icons/bs";

const Header = () => {
    const history = useHistory()
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Button onClick={() => goToEventList(history)} color ="inherit"> MB Ticket </Button>
            <Button onClick={() => goToLogin (history)} color ="inherit"> Login </Button>
            <Button onClick={() => goToCart (history)} color ="inherit"> <BsCart3/> </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header