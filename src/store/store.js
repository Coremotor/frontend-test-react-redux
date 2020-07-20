import { createStore } from "redux";
import rootReduser from './redusers/rootReduser';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(rootReduser, devToolsEnhancer());

export default store;