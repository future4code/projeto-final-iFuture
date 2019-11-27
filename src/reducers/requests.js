const initialState = {
  allOrders: [],
  actualProfile: "",
  actualAmount: 0,
  actualOrder: null,
}

const requests = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return { ...state, allOrders: action.payload.orders }
    case "SET_PROFILE":
      return { ...state, actualProfile: action.payload.profile }
    case "SET_AMOUNT":
      return { ...state, actualAmount: action.payload.amount }
    case "SET_ACTIVE_ORDER":
      return { ...state, actualOrder: action.payload.activeOrder }
    default:
      return state
  }
}

export default requests
