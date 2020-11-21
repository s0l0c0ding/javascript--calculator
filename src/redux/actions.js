export const INSERT = 'INSERT';
export const OPERATOR = 'OPERATOR';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const CLEAR = 'CLEAR';
export const CALC = 'CALC';

export const insertAction = (data) => {
    return {
        type: INSERT,
        payload: data
    }
}


export const operatorAction = (data) => {
    return {
        type: OPERATOR,
        payload: data
    }
}

// export const subtractAction = (data) => {
//     return {
//         type: SUBTRACT,
//         payload: data
//     }
// }

// export const multiplyAction = (data) => {
//     return {
//         type: MULTIPLY,
//         payload: data
//     }
// }

// export const divideAction = (data) => {
//     return {
//         type: DIVIDE,
//         payload: data
//     }
// }

export const clearAction = (data) => {
    return {
        type: CLEAR,
        payload: data
    }
}

export const calcAction = (data) => {
    return {
        type: CALC,
        payload: data
    }
}