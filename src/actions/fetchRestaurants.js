import axios from 'axios';

const getRestaurants = restaurants => ({
  type: 'GET_PLACES',
  payload: {
    restaurants
  }
});

export const fecthRestaurants = () => async dispatch => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlN0OVFGWGRKbWZQTE9abmNXWEJ6IiwibmFtZSI6IkNhaW8gR29tZXMiLCJlbWFpbCI6ImNhaW9AZ21haWwuY29tIiwiY3BmIjoiMTkxLjExMS4xMTEtMjIiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gT2xpdmVpcmEgTWVuZGVzLCAxMDAsIDcxIC0gSmFyZGltIENhbWFyZ28iLCJpYXQiOjE1NzQ4MDY1NjV9.KCA7gv2lcN_t3AVfTqAC4u5hocoWgyMlO46FJ306nGU'
   
  const response = await axios.get(
    'https://us-central1-missao-newton.cloudfunctions.net/iFuture/restaurants',
    {
      headers: {
        auth: token
      }
    },
    );
    dispatch(getRestaurants(response.data.restaurants))
};