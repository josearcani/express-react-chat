import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Routes, Switch } from 'react-router-dom';
import { ChatScreen } from '../components/chat/ChatScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const { user, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    verifyToken()
  }, [verifyToken])


  if ( user.checking ) {
    return <h1>Espere por favor</h1>
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
