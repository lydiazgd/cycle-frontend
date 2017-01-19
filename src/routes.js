import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import { App, Home, About, NotFound, Register,Login,Commodity,CommodityGrid,Slider,Gallery,FrontHeader,Price,PersonalPage,Publishment } from './components';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="register" component={Register} />
        <Route path="slider" component={Slider} />
        <Route path="login" component={Login} />
        <Route path="commodity" component={Commodity} />
        <Route path="commoditygrid" component={CommodityGrid} />
        <Route path='gallery' component={Gallery} />
        <Route path='personalpage' component={PersonalPage} />
        <Route path='publishment' component={Publishment} />
        <Route path="about" component={About} />
     </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;