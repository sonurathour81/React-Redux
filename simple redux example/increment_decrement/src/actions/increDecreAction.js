export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const add = (first,second) => {
    return {
        type: "ADD",
        payload: first+second
    }
}

export const sub = (first,second) => {
    return {
        type: "SUB",
        payload: first-second
    }
}

export const mul = (first,second) => {
    return {
        type: "MUL",
        payload: first * second
    }
}

export const div = (first,second) => {
    return {
        type: "DIV",
        payload: first/second
    }
}

export const mod = (first,second) => {
    return {
        type: "MOD",
        payload: first%second
    }
}