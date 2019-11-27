import axios from 'axios'

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/iFuture'

export const setOrders = (orders) => ({
    type: 'SET_ORDERS',
    payload: {
        orders
    }
})

export const setProfile = (profile) => ({
    type: 'SET_PROFILE',
    payload: {
        profile
    }
})

export const getOrders = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");

    const response = await axios.get(`${urlBase}/orders/history`, {
        headers: {
            auth: token
        }

    })

    dispatch(setOrders(response.data.orders))
}

export const getProfile = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");

    const response = await axios.get(`${urlBase}/profile`, {
        headers: {
            auth: token
        }

    })

    dispatch(setProfile(response.data.user))
}

