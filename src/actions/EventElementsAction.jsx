export const createNewEvent = ({name, id, time, date}) => {
    return{
        type: "CREATE_NEW_EVENT",
        payload: {
            id: Math.random() * 1000,
            name,
            time,
            date
        }
    }
}

export const editEvent = (id, date) => {
    return{
        type: "EDIT_EVENT",
        payload: {
            id,
            date,
            time: "",
            name: ""
        }
    }
}

export const deleteEvent = (id) => {
    return{
        type: "DELETE_EVENT",
        payload: {
            id
        }
    }
}
