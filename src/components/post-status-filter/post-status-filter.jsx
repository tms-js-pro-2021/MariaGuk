import React from 'react';
import './post-status-filter.css';
// import { Button } from '@material-ui/core';

export default function PostStatusFilter() {
  return (
    <div className="btn-group">
      <button type="button" className="button">
        All tasks
      </button>
      <button type="button" className="button">
        Liked tasks
      </button>
    </div>
  );
}
