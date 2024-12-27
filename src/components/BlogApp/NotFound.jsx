import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h2>ERROR 404 - Not Found</h2>
        <p>Page does not exist</p>
        <Link to="/">Back to the homepage...</Link>
    </div>
  );
}

export default NotFound;