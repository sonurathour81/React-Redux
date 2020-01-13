export const deleteItem = (filteredValue) => {
    return{
        type: "DELETE",
        payload: filteredValue
    }
}