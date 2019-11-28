import axios from 'axios';
import { routes } from "../containers/Router";
import { push } from "connected-react-router";

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/iFuture';

export const login = (email, password) => async dispatch => {

    const body = { email, password }

    const response = await axios.post(
        `${urlBase}/login`, body
    );
    console.log("Resposta", response)
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

    window.localStorage.setItem('token', response.data.token);

    if (response.status === 200) {
        dispatch(push(routes.address))
    }
}

export const signUpAddress = (street, number, neighbourhood, city, state, complement) => async dispatch => {
    const newAddress = {
        street,
        number,
        neighbourhood,
        city,
        state,
        complement,
    }

    const token = window.localStorage.getItem('token');

    const response = await axios.put(
        `${urlBase}/address`, newAddress, {
            headers: {
                auth: token
            }
        }
    );

    window.localStorage.setItem('token', response.data.token);

    if (response.status === 200) {
        dispatch(push(routes.feed))
    }
}

