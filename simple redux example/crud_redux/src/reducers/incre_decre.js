const INITIAL = {
    res_counter : 0
};

const incre_decre = (state = INITIAL, action) => {
    switch(action.type){
        case "INCREMENT":
             state.res_counter +=1;
             return {...state}
        case "DECREMENT":
             state.res_counter -= 1;
            return {...state}
        case "CLEAR":
            state.res_counter = action.payload;
            return {...state}
        default:
            return state;
    }

}

export default incre_decre;