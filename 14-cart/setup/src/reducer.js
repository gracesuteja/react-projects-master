const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    }
  }
  if (action.type === 'INCREASE') {
    let updatedCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        let increased = item.amount + 1 > 99 ? 99 : item.amount + 1
        return { ...item, amount: increased }
      }
      return item
    })
    return {
      ...state,
      cart: updatedCart,
    }
  }
  if (action.type === 'DECREASE') {
    let updatedCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          let decreased = item.amount - 1 < 1 ? 0 : item.amount - 1
          return { ...item, amount: decreased }
        }
        return item
      })
      .filter((item) => item.amount !== 0)
    return {
      ...state,
      cart: updatedCart,
    }
  }
  if (action.type === 'GET_TOTAL') {
    let tempTotal = 0
    let tempAmount = 0
    state.cart.map((item) => {
      tempTotal = tempTotal + item.price * item.amount
      tempAmount = tempAmount + item.amount
    })
    return { ...state, total: tempTotal.toFixed(2), amount: tempAmount }
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'REFRESH') {
    return { ...state, cart: action.payload, loading: false }
  }

  if (action.type === 'TOGGLE_AMOUNT') {
    const { id, operator } = action.payload
    let updatedCart = state.cart
      .map((item) => {
        if (item.id === id) {
          let tempAmount = 0
          if (operator === '+') {
            tempAmount = item.amount + 1 > 99 ? 99 : item.amount + 1
          } else if (operator === '-') {
            tempAmount = item.amount - 1 < 1 ? 0 : item.amount - 1
          }
          return { ...item, amount: tempAmount }
        }
        return item
      })
      .filter((item) => item.amount !== 0)

    return {
      ...state,
      cart: updatedCart,
    }
  }
  throw new Error('no matching action type')
}

export default reducer
