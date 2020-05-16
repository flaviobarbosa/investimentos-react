import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark justify-content-between'>
      <Link to='/'>Investimentos</Link>
      <NavLink to='/nota'>Nota</NavLink>
    </nav>
  );
};

export default Navbar;
