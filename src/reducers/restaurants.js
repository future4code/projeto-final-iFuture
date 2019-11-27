const initialState = {
  allRestaurants: [],
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLACES':
      return { ...state, allRestaurants: action.payload.restaurants };
    default:
      return state;
  }
};

export default restaurants;
