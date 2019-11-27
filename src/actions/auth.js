import axios from 'axios';
import { routes } from "../containers/Router";
import { push } from "connected-react-router";

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/iFuture';

export const login = (email, password) => async dispatch => {

    const body = { email, password }

    const response = await axios.post(
        `${urlBase}/login`, body
    );
    window.localStorage.setItem('token', response.data.token)
    dispatch(push(routes.feed));
} 

export const signUp = (name, email, cpf, password) => async dispatch => {
    const newUser = {
        name,
        email,
        cpf,
        password
    }
    const response = await axios.post(
        `${urlBase}/signup`, newUser
    );
    if (response.status === 200) {
        dispatch(push(routes.address))
    }
    console.log("Reposta", response)
}