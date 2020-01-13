const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      case 'ADD':
          return action.payload
      case 'SUB':
          return action.payload
      case 'MUL':
          return action.payload
      case 'DIV':
          return action.payload
      case 'MOD':
          return action.payload
      default:
        return state
    }
  }

export default counter;