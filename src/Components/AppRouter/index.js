import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../routes';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../Util/const';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MyContext } from '../..';

const AppRouter = () => {
  const { auth } = useContext(MyContext);
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <Routes>
          {privateRoutes.map((data) => (
            <Route key={data.path} path={data.path} element={data.Compoment} />
          ))}
          <Route
            path="*"
            element={<Navigate to={HOME_ROUTE} replace />}
          />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(data => (
            <Route key={data.path} path={data.path} element={data.Compoment} />
          ))}
          <Route
            path="*"
            element={<Navigate to={LOGIN_ROUTE} replace />}
          />
        </Routes>
      )}
    </>
  )
}

export default AppRouter;