import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

export default function PostList() {
  return (
    <ul className="postList-container">
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  );
}
