import React from "react";
import { Route, Redirect } from "react-router-dom";
import { routes } from '../containers/Router';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    actualProfile: state.requests.actualProfile,
})


export const Authenticator = connect(mapStateToProps, null)((props) => {

    const token = window.localStorage.getItem('token')
    
    if (!token) {
        return (<Redirect to={{ pathname: routes.login, state: { from: props.location } }} />)
    } else if (props.actualProfile.hasAddress === false) {
        return (<Redirect to={{ pathname: routes.address, state: { from: props.location } }} />)
    } else {
        return props.children
    }
})

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        <Authenticator>
            <Component {...props} />
        </Authenticator>
    )} />
)

