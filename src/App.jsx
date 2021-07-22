import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import LoginPage from './LoginPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          404 not found <Link to="/login">login</Link>
        </Route>
      </Switch>
    </Router>
  );
}
