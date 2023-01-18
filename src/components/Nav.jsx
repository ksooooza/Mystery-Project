import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create-entry">Create Entry</Link>
            <Link to="/edit-entry">Edit Entry</Link>
      </nav>
    </div>
  )
}

export default Navbar;