import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../../style/constants";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import Feed from '../Feed';
import RestaurantDetail from '../RestaurantDetail';
import ProfilePage from "../ProfilePage";
import Cart from "../Cart";
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
        <PrivateRoute path={routes.editAdress} component={() => <div />} />
        <PrivateRoute path={routes.editSignUp} component={() => <div />} />
        <PrivateRoute path={routes.profile} component={ProfilePage} />
        <PrivateRoute path={routes.search} component={SearchPage} />
        <PrivateRoute path={routes.detail} component={RestaurantDetail} />
        <PrivateRoute path={routes.cart} component={Cart} />
        <PrivateRoute path={routes.feed} component={Feed} />
        <Route path={routes.adress} component={LoginPage} />
        <Route path={routes.signUp} component={SignUpPage} />
        <Route path={routes.login} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
