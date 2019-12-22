import React from 'react';
import { Link } from 'react-router-dom'

const ThumbBar = () =>
<div class="navbar">
  <Link to="/">Trends</Link>
  <Link to="/stocks">Analysis</Link>
  <Link to="/crypto">Search</Link>
  <Link to="/forex">Profile</Link>
</div>

export default ThumbBar;