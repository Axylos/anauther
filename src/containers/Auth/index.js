import React from 'react';
import { Link } from 'react-router-dom';

const AuthContainer = props => (
  <div>
    <h2>Auth</h2>
    <h3><Link to="/about">Go To About</Link></h3>
  </div>
)
export default AuthContainer;
