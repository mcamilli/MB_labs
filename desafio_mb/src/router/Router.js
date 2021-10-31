import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EventListPage from "../pages/EventListPage/EventListPage";
import EventDetailsPage from "../pages/EventDetailsPage/EventDetailsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import CartPage from "../pages/CartPage/CartPage"


const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path ="/">
              <EventListPage/>
          </Route>
          <Route exact path ="/detalhes/:id">
              <EventDetailsPage/>
          </Route>
          <Route exact path ="/login">
              <LoginPage/>
          </Route>
          <Route exact path ="/signup">
              <SignupPage/>
          </Route>
          <Route exact path ="/carrinho">
              <CartPage/>
          </Route>
          <Route>
              <div>Error</div>
          </Route>
          
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;
  