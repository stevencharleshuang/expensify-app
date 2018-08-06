import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      404!
      <br /><br />
      <Link to="/">Go Home</Link>
    </div>
  );
}

