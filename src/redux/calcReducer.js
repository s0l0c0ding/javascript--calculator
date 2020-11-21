import { INSERT, OPERATOR, CLEAR, CALC } from './actions';

const initialState = {
    display: [0],
    map: new Map(),
    index: 0,
    res: 0
}

const OPERATORS = ['+', '-', '/', '*'];

export default function calcReducer(state = initialState, action) {
    let disp = [...state.display];
    let res = state.res;
    switch (action.type) {
        case INSERT:
            if (disp[0] === 0) disp.shift();
            if(action.payload === '.' && state.map.get(state.index).includes('.')){
                return state;
            }
            const temp = state.map.get(state.index) ? state.map.get(state.index) : '';
            state.map.set(state.index, temp + '' + action.payload);
            return {
                display: [...disp, action.payload],
                map: state.map,
                index: state.index,
                res: res
            };

        case OPERATOR:
            if(action.payload === '-' && OPERATORS.concat().includes(disp[disp.length - 1])){
                state.map.set(state.index, action.payload);
            return {
                display: [...disp, action.payload],
                map: state.map,
                index: state.index,
                res: res
            };
            }
            if (OPERATORS.concat().includes(disp[disp.length - 1])){
                disp.pop();
                state.map.delete(state.index-1);
                state.index -= 1;
            }
            state.map.set(state.index + 1, action.payload);
            return {
                display: [...disp, action.payload],
                map: state.map,
                index: state.index + 2,
                res: res
            };

        case CALC:
            res = operate(state.map);
            return {
                display: [res],
                map: new Map([[0, res]]),
                index: 0,
                res: res
            };

        case CLEAR:
            return {
                display: [0],
                map: new Map(),
                index: 0,
                res: 0
            }
        default:
            return state;
    }
}

const operate = (m) => {
    let res = 0;
    for (let index = 0; index < m.size; index++) {
        const element = m.get(index);
        if (index === 0) {
            res = Number.parseFloat(element);
            continue;
        }
        if (OPERATORS.includes(element)) {
            const second = Number.parseFloat(m.get(index + 1));
            switch (element) {
                case '+':
                    res = res + (second ? second : 0);
                    break;
                case '-':
                    res = res - (second ? second : 0);
                    break;
                case '/':
                    res = res / (second ? second : 1);
                    break;
                case '*':
                    res = res * (second ? second : 1);
                    break;
                default:
                    break;
            }
            index++;
        }
    }
    return res;

}