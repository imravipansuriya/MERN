const intialState = {
    counter: 15,
    name: 'Ravi',
    products: [],
    cart: [],
    user: {},
    isLoggedIn: false,
    isLoading: false,
}

/**
 * 
 * @param {*} state 
 * @param {{
 *  type: string,
 *  payload: any
 * }} action 
 * @returns 
 */
function reducer(state = intialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }

        case 'ADDBY5':
            return {
                ...state,
                counter: state.counter + action.payload
            }

        case 'MINUSBY5':
            return {
                ...state,
                counter: state.counter - action.payload
            }

        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}

export default reducer;