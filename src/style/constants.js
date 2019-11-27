import React from "react";
import { Route, Redirect } from "react-router-dom";
import { routes } from '../containers/Router';
// import { setErrorMsg, setErrorIfNotAdminMsg } from "./actions/auth";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    actualProfile: state.requests.actualProfile,
})


export const Authenticator = connect(mapStateToProps, null)((props) => {

    const token = window.localStorage.getItem('token')
    if (!token) {

        // props.setErrorMsg('errorToken')
        console.log('sem token')
        return (<Redirect to={{ pathname: routes.login, state: { from: props.location } }} />)
        
    }else if (props.actualProfile.hasAddress===false) {

        // props.setErrorMsg('errorToken')
        console.log('sem address registrado')
        return (<Redirect to={{ pathname: routes.adress, state: { from: props.location } }} />)
        
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

