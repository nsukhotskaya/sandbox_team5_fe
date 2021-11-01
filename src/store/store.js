import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux/src';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';

const history = createBrowserHistory();

const middleWares = [thunk, routerMiddleware(history)];
const store = createStore(
  rootReducer(history),
  compose(applyMiddleware(...middleWares)),
);
export { store, history };
