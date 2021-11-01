import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux/src';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
