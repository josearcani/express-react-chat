import React, { useContext } from 'react';
import { BrowserRouter as Routes, Switch, Route, Redirect } from 'react-router-dom';
import { ChatScreen } from '../components/chat/ChatScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/authContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/auth/*"
            component={ AuthRouter }
            isAuth={ user.logged }
          />
          {/* <Route exact path="/" component={ ChatScreen } /> */}
          <PrivateRoute
            path="/"
            component={ ChatScreen }
            isAuth={ user.logged }
          />
        </Switch>
      </div>
    </Routes>
  )
}
