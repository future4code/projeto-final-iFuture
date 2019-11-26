const initialState = {
  allOrders: [],
  actualProfile: "",
}

const requests = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return { ...state, allOrders: action.payload.orders }
    case "SET_PROFILE":
      return { ...state, actualProfile: action.payload.profile }
    default:
      return state
  }
}

export default requests
