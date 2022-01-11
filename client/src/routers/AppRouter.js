import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Routes, Switch } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { ChatScreen } from '../components/chat/ChatScreen';
import { Spinner } from '../components/Spinner';

export const AppRouter = () => {

  const { user, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    verifyToken()
  }, [verifyToken])

  if ( user.checking ) {
    return <Spinner />
  }
  
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
