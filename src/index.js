import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import storeTools from './store';

import PrivateRoute from './components/PrivateRoute';
import About from './containers/About';
import Auth from './containers/Auth';
import Home from './containers/Home';

import registerServiceWorker from './registerServiceWorker';

const { store, history, DevTools } = storeTools;
ReactDOM.render(
  <Provider store={store}>
    <div>
      <ConnectedRouter history={history}>
        <App>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/auth" component={Auth} />
        </App>
      </ConnectedRouter>
      <DevTools />
    </div>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
