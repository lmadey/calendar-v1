export const isEventReducer = (state = false, action) => {
    switch(action.type){
        case "SET_IS_EVENT":
            return !state;
        default:
            return state;
    }
}