import React from 'react';
import { Link } from 'react-router-dom'

const ThumbBar = () =>
<div class="navbar">
  <Link to="/" class="active">HOME</Link>
  <Link to="/stocks">STOCKS</Link>
  <Link to="/crypto">FOREX</Link>
  <Link to="/forex">CRYPTO</Link>
</div>

export default ThumbBar;