export const eventColorReducer = (state = "red", action) => {
    switch(action.type){
        case "SET_EVENT_COLOR":
            return action.payload.color
        default:
            return state
    }
}