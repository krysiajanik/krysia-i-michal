import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import DrinkMenu from "./DrinkMenu/DrinkMenu";
import SittingChart from "./SittingChart/SittingChart";
import Photos from "./Photos/Photos";
import Header from "../components/Header/Header";


class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/drinkmenu" component={DrinkMenu} />
          <Route path="/sittingchart" component={SittingChart} />
          <Route path="/photos" component={Photos} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
