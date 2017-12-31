import React from 'react';
import { Link } from 'react-router-dom';

const About = props => (
  <div>
    <p>About some stuff</p>
    <h3><Link to="/">Go back to home:</Link></h3>
  </div>
)

export default About;
