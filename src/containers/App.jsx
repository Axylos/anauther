import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router';

const ConnectedSwitch = connect(state => ({
  location: state.routerReducer.location
}))(Switch);


const AppContainer = props => (
  <div>
    <p>hey there</p>
    <ConnectedSwitch>
      {props.children}
    </ConnectedSwitch>
  </div>
);

export default connect(state => {
  return {location: state.routerReducer.location}
})(AppContainer);


