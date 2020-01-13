// export const anotherName = (name) => {
//     return {
//         type:"CHANGE_NAME",
//         payload:name
//     }
// }


// export const anotherName = () => {
//     return (dispatch) => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json())
//         .then(res2 => {
//             dispatch({type:"CHANGE_NAME",payload:res2[0].name})
//         })
//     }
// }

export const anotherName = () => {
    return async (dispatch) => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await data.json();
        dispatch({type:"CHANGE_NAME",payload:(result[0].name)});
    };
}

