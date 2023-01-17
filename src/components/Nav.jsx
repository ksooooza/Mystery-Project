import React from 'react';
import { Link } from 'react';

export default function Nav() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create-entry">Create Entry</Link>
            <Link to="/edit-entry">Edit Entry</Link>
            <Link to="/delete-entry">Delete Entry</Link>
      </nav>
    </div>
  )
}
