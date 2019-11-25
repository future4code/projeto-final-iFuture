import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../../style/constants";

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
        <Route path={routes.detail} component={() => <div />} />
        <Route path={routes.cart} component={() => <div />} />
        <Route path={routes.feed} component={() => <div />} />
        <Route path={routes.adress} component={() => <div />} />
        <Route path={routes.signUp} component={() => <div />} />
        <Route path={routes.login} component={() => <div />} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
