import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import DrinkMenu from "./DrinkMenu/DrinkMenu";
import SittingChart from "./SittingChart/SittingChart";
import Header from "../components/Header/Header";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/krysia-i-michal/" component={Home} />
          <Route path="/krysia-i-michal/menu" component={Menu} />
          <Route path="/krysia-i-michal/drinkmenu" component={DrinkMenu} />
          <Route path="/krysia-i-michal/sittingchart" component={SittingChart} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
