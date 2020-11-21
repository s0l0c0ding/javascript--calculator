export const INSERT = 'INSERT';
export const OPERATOR = 'OPERATOR';
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