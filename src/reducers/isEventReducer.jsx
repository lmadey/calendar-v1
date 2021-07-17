export const isEventReducer = (state = false, acction) => {
    switch(acction.type){
        case "SET_IS_EVENT":
            return !state;
        default:
            return state;
    }
}