import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import storeTools from './store';

import registerServiceWorker from './registerServiceWorker';

const { store, history, DevTools } = storeTools;

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
      <DevTools />
    </div>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
