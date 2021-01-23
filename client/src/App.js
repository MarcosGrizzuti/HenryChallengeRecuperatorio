import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NavBar, Product, Catalogo, Status404, Home } from "./components/index";
import { Provider } from "react-redux"
import generarStore from "./store";

function App() {
  const store = generarStore();
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catalogo" component={Catalogo} />
            <Route exact path="/producto/:id" component={Product} />
            <Route component={Status404} /> {/* TODO: Hacerlo funcional */}
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
