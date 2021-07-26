import React from 'react';
import './search-panel.css';
// import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

export default function SearchPanel() {
  return (
    <div className="">
      <input className="search-input" type="text" placeholder="Search" />
      <Button>
        <SearchIcon
          sx={{
            fontSize: 44,
            color: 'rgb(255, 225, 243)',
            position: 'absolute',
            mr: '130px',
          }}
        />
      </Button>
    </div>
  );
}
