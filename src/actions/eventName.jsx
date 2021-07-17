export const eventName = (name) => {
    return{
        type: "SET_EVENT_NAME",
        payload: {
            name
        }
    }
}
