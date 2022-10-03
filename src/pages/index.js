import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import Profile from "./Profile";
import NotFound from "components/NotFound";
import Home from "./Home";
import Test from "./Test";

export default function PageContent({propsExtra}) {
  const pathName = '/namamodul' // <-- parent-url
  return (
    <Switch>
      {/*<Redirect from={'/login'} to={'/namamodul'} />*/}
      <Route path={pathName + '/dashboard'} render={props => <Home {...props} {...propsExtra} />} />
      <Route path={pathName + '/category'} render={props => <Category {...props} {...propsExtra} />} />
      <Route path={pathName + '/products'} render={props => <Products {...props} {...propsExtra} />} />
      <Route path={pathName + '/profile'} render={props => <Profile {...props} {...propsExtra} />} />
      <Route path={pathName + '/profile2'} render={props => <Profile {...props} {...propsExtra} />} />
      <Route path={pathName + '/test'} render={props => <Test {...props} {...propsExtra} />} />
      <Route component={NotFound}/>
    </Switch>
  )
}
