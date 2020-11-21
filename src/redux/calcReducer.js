import { INSERT, OPERATOR, CLEAR, CALC } from './actions'

const initialState = {
    display: [0],
    res: 0
}

const OPERATORS = ['+', '-', '/', '*'];

export default function calcReducer(state = initialState, action) {
    let disp = [...state.display];
    let res = state.res;
    switch (action.type) {
        case INSERT:
            if (disp[0] === 0) disp.shift();
            return {
                display: [...disp, action.payload],
                res: res
            };

        case OPERATOR:
            if (OPERATORS.includes(disp[disp.length - 1])) disp.pop();
            return {
                display: [...disp, action.payload],
                res: res
            };

        case CALC:
            res = operate(state.display);
            return {
                display: [res],
                res: res
            };

        case CLEAR:
            return initialState;
        default:
            return state;
    }
}

const operate = (arr) => {
    const m = new Map();
    let i = 0;
    let res = 0;
    for (const item of arr) {
        if (!OPERATORS.includes(item)) {
            const temp = m.get(i) ? m.get(i) : '';
            m.set(i, temp + '' + item);
        } else {
            i++;
            m.set(i, item);
            i++;
        }
    }
    for (let index = 0; index < m.size; index++) {
        const element = m.get(index);
        if (index === 0) {
            res = Number.parseFloat(element);
            continue;
        }
        if (OPERATORS.includes(element)) {
            const second = Number.parseFloat(m.get(index+1));
            switch (element) {
                case '+':
                    res = res + second;
                    break;
                case '-':
                    res = res - second;
                    break;
                case '/':
                    res = res / second;
                    break;
                case '*':
                    res = res * second;
                    break;
                default:
                    break;
            }
            index++;
        }
    }
    return res;

}