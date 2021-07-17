export const eventElementsReducer = (
    state = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [], 
    action) => {
    switch(action.type){
        case "CREATE_NEW_EVENT":
            return [...state, action.payload];
        case "EDIT_EVENT":
            return state.map((event) => {
                if(event.id !== action.payload.id){
                    return event;
                }
                else{
                    return({
                        name: action.payload.name,
                        time: action.payload.time,
                        date: action.payload.date,
                        id: event.id
                    })
                }
            });
        case "DELETE_EVENT":
            return state.filter(event => event.id !== action.payload.id);
        default:
            return state;
    }
}