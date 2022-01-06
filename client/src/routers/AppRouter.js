import React from 'react';
import { BrowserRouter as Routes, Switch, Route, Redirect } from 'react-router-dom';
import { ChatScreen } from '../components/chat/ChatScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <Routes>
      <div>
        <Switch>
          <Route path="/auth" component={ AuthRouter } />
          <Route exact path="/" component={ ChatScreen } />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Routes>
  )
}
