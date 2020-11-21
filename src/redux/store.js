import { createStore } from "redux";
import calcReducer from './calcReducer';

export const store = createStore(calcReducer);