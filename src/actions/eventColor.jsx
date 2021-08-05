export const eventColor = (color) => {
    return{
        type: "SET_EVENT_COLOR",
        payload: {
            color
        }
    }
}