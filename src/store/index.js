import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import RootReducer from './RootReducer';
import DevTools from '../components/DevTools';

const history = createHistory();
const histMiddleware = routerMiddleware(history);
const store = createStore(
  RootReducer,
  DevTools.instrument(),
  applyMiddleware(
    histMiddleware
  ),
);

export default {
  store,
  history,
  DevTools
};
