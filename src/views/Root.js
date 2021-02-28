import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../context";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import DrinkMenu from "./DrinkMenu/DrinkMenu";
import SittingChart from "./SittingChart/SittingChart";
import Header from "../components/Header/Header";

class Root extends React.Component {
  render() {
    const contextElements = {};

    return (
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/drinkmenu" component={DrinkMenu} />
          <AppContext.Provider value={this.contextElements}>
            <Route path="/sittingchart" component={SittingChart} />
          </AppContext.Provider>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
