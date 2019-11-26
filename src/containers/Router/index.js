import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../../style/constants";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import Feed from '../Feed';
import RestaurantDetail from '../RestaurantDetail';
import ProfilePage from "../Profile";
import Cart from "../Cart";
import SearchPage from "../SearchPage";
import AddressPage from "../AddressPage";
import ProfileEditPage from "../ProfileEditPage";



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
        <Route path={routes.editSignUp} component={ProfileEditPage} />
        <Route path={routes.profile} component={ProfilePage} />
        <Route path={routes.search} component={SearchPage} />
        <Route path={routes.detail} component={RestaurantDetail} />
        <Route path={routes.cart} component={Cart} />
        <Route path={routes.feed} component={Feed} />
        <Route path={routes.adress} component={AddressPage} />
        <Route path={routes.signUp} component={SignUpPage} />
        <Route path={routes.login} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
