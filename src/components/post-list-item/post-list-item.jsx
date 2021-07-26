import React from 'react';
import './post-list-item.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default function postListItem() {
  return (
    <li className="list-item-wrapper">
      <span className="todo-text">Hello World!</span>
      <div className="icons-container">
        <StarBorderIcon type="button" sx={{ fontSize: 26, color: '#F4CA16' }} />
        <DeleteOutlineIcon
          type="button"
          className=""
          sx={{ fontSize: 25, ml: 1 }}
        />
        <FavoriteBorderIcon
          type="button"
          sx={{ fontSize: 26, color: '#D93025', ml: 1 }}
        />
      </div>
    </li>
  );
}
