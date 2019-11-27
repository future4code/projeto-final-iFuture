import axios from 'axios';
import { routes } from "../containers/Router";
import { push } from "connected-react-router";

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/iFuture';

export const login = (email, password) => async dispatch => {

        const body = {  email, password }

        const response = await axios.post(
            `${urlBase}/login`, body
        );
        window.localStorage.setItem('token', response.data.token)
        dispatch(push(routes.feed));
} 