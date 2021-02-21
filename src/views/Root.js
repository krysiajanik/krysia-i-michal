import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import DrinkMenu from './DrinkMenu/DrinkMenu';
import SittingChart from './SittingChart/SittingChart';


class Root extends React.Component {
render () {
    return (
        <BrowserRouter>
    
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/drinkmenu" component={DrinkMenu} />
            <Route path="/sittingchart" component={SittingChart} />
          </Switch>
         
      </BrowserRouter>
        )
}
    
};

export default Root;