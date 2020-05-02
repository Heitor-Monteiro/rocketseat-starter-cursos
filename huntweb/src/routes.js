import React from "react";

import { BrowserRouter, Switch, Router, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";

const Routes = () => (
  // BrowserRouter: Define que as rotas serão utilizadas em um Navegador
  // Switch: viabiliza que apenas uma única rota seja chamada ao mesmo tempo
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
