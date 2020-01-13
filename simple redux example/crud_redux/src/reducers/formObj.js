const INITIAL = {
    user:[]
};

const formObj = (state = INITIAL, action) => {
    switch(action.type){
        case "CREATE":
            return {user: [...state.user, action.payload ] };
        case "DELETE":
            return {user: action.payload  };
        case "UPDATE":
            let id = action.payload.id;
            delete action.payload.id;
            state.user[id] = action.payload;
            return {...state};
        default:
            return state;
    }

}

export default formObj;