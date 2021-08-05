export const eventNameReducer = (state = "HTML", action) => {
    switch(action.type){
        case "SET_EVENT_NAME":
            return action.payload.name
        default:
            return state
    }
}