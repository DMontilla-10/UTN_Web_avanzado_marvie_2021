import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <h1>Este es el nav de nuestra app</h1>
        <Link to="/">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/nosotros">Nosotros</Link>

        <Switch>
          <Route exact path="/">
            Pagina principal...
          </Route>
          <Route exact path="/contacto">Contacto...</Route>
          <Route exact path="/nosotros">Nosotros...</Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Home;
