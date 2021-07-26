import React from 'react';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import PostList from './components/post-list';
import PostStatusFilter from './components/post-status-filter';
import PostAddForm from './components/post-add-form';
import './ToDoList.css';

export default function ToDoList() {
  return (
    <div className="app">
      <AppHeader />
      <PostStatusFilter />
      <div className="">
        <SearchPanel />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
}
