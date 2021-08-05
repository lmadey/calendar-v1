export const setEventCardsReducer = (state = false, action) => {
    switch(action.type){
        case "SET_EVENT_CARDS":
            return !state;
        default:
            return state;
    }
}
