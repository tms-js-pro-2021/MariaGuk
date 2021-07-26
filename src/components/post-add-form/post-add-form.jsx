import React from 'react';
import './post-add-form.css';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function PostAddForm() {
  return (
    <form className="post-add-container">
      <input
        type="text"
        placeholder="What should you do today?"
        className="add-input"
      />
      <Button>
        <AddIcon
          type="submit"
          className="add-button"
          sx={{
            fontSize: 50,
            color: 'rgb(255, 225, 243)',
            position: 'absolute',
            paddingRight: 16,
          }}
        >
          Add
        </AddIcon>
      </Button>
    </form>
  );
}
