import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import DrinkMenu from "./DrinkMenu/DrinkMenu";
import SittingChart from "./SittingChart/SittingChart";
import Questions from "./Questions/Questions";
import Photos from "./Photos/Photos";
import Header from "../components/Header/Header";

class Root extends React.Component {
  render() {
    return (
      <>
        <MetaTags>
          <title>Krysia i Michał</title>
          <meta name="description" content="Aplikacja dla gości na weselu Krysi i Michała. Podgórzyn, 04.09.2021." />
          <meta property="og:title" content="Krysia i Michał" />
          <meta property="og:image" content="../assets/img/header-background.jpg" />
          <meta property="og:url" content="https://krysia-i-michal.pl/"></meta>
        </MetaTags>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/drinkmenu" component={DrinkMenu} />
            <Route path="/sittingchart" component={SittingChart} />
            <Route path="/photos" component={Photos} />
            <Route path="/faq" component={Questions} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Root;
