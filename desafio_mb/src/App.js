import React from "react"
import theme from './constants/theme';
import Router from "./router/Router";
import { ThemeProvider } from '@material-ui/core/styles'
import  ProductProvider from "./components/ProductsList/ProductContext"


const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
    <ProductProvider>
        <Router />
    </ProductProvider>
    </ThemeProvider>
    
  );
}

export default App;
