import React from 'react';
import { BrowserRouter as Routes, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from '../components/chat/Header';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <Routes>
      <div>
        <Switch>
          <Route path="/auth" component={ AuthRouter } />
          <Route exact path="/" component={ Header } />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Routes>
  )
}
