import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import ToDoList from './ToDoList';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <ToDoList />
          <Link to="/login">Login</Link>
        </Route>
      </Switch>
    </Router>
  );
}
