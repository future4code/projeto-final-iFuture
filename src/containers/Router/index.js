import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../../style/constants";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import Feed from '../Feed';
import RestaurantDetail from '../RestaurantDetail';
import SearchPage from "../SearchPage";


export const routes = {
  login: '/',
  signUp: '/signup',
  adress: '/signup/adress',
  feed: '/feed',
  search: '/search',
  detail: '/detail/restaurant',
  cart: '/cart',
  profile: '/profile',
  editSignUp: '/edit/signup',
  editAdress: '/edit/adress'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.editAdress} component={() => <div />} />
        <Route path={routes.editSignUp} component={() => <div />} />
        <Route path={routes.profile} component={() => <div />} />
        <Route path={routes.search} component={() => <div />} />
        <Route path={routes.detail} component={RestaurantDetail} />
        <Route path={routes.cart} component={() => <div />} />
        <Route path={routes.feed} component={Feed} />
        <Route path={routes.adress} component={SearchPage} />
        <Route path={routes.signUp} component={SignUpPage} />
        <Route path={routes.login} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
