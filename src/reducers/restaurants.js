const initialState = {
  allRestaurants: [],
  selectRestaurant: {},
  
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLACES':
      return { ...state, allRestaurants: action.payload.restaurants };
    case 'SELECTED_RESTAURANT':
      return { ...state, selectRestaurant: action.payload.data}
    default:
      return state;
  }
};

export default restaurants;
