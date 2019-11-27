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
      const newActualAmount = [...state.actualAmount]
      newActualAmount.push(action.payload.amount)
      return { ...state, actualAmount: newActualAmount }
    case "SET_ACTIVE_ORDER":
      return { ...state, actualOrder: action.payload.activeOrder }
    default:
      return state
  }
}

export default requests
