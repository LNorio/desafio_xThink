  
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProductPage from '../pages/ProductPage'
import PurchasePage from '../pages/PurchasePage'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductPage} />
          <Route path="/purchase" component={PurchasePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;