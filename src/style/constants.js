import React from "react";
import { Route, Redirect } from "react-router-dom";
import { routes } from '../containers/Router';
// import { setErrorMsg, setErrorIfNotAdminMsg } from "./actions/auth";
import { connect } from "react-redux";

// const mapDispatchToProps = dispatch => ({
//     setErrorMsg: (errorMsg) => dispatch(setErrorMsg(errorMsg)),
//     // setErrorIfNotAdminMsg: (errorMsg) => dispatch(setErrorIfNotAdminMsg(errorMsg)),
// })

export const Authenticator = connect(null, null)((props) => {

    const token = window.localStorage.getItem('token')
    if (!token) {

        // props.setErrorMsg('errorToken')

        return (<Redirect to={{ pathname: routes.login, state: { from: props.location } }} />)
        
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

