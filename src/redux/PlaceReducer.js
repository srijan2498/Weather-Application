const initialState = {
    city: "",
    country: ""
}

const placeReducer=(state=initialState, action)=>{
    switch (action.type) {
        case 'SETPLACE':
            state.city=action.payload.city
            state.country = action.payload.country
            return state
        default:
            return state
    }
}

export default placeReducer