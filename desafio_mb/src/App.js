import React from "react"
import theme from './constants/theme';
import Router from "./router/Router";
import { ThemeProvider } from '@material-ui/core/styles'
import  ProductProvider from "./components/ProductsList/ProductContext"
import { CartProvider } from "./components/CartContext/CartContext";


const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
    <CartProvider>
    <ProductProvider>
        <Router />
    </ProductProvider>
    </CartProvider>
    </ThemeProvider>
    
  );
}

export default App;
