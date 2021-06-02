import React from "react";
import { Route, BrowserRouter } from "react-router-dom"; // mudandça de página

import { Home } from "../pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      {/* local onde fica páginas em rotas */}
      <Route component={Home} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
