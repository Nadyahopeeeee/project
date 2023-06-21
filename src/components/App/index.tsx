import {Route, BrowserRouter, Routes, Link} from 'react-router-dom';

// project imports
import {AppRoute, AuthorizationStatus} from '../../consts';
import PrivateRoute from '../PrivateRoute';
import Layout from '../Layout';
import MainPage from '../../pages/MainPage';
import RoomPage from '../../pages/RoomPage';
import LoginPage from '../../pages/LoginPage';
import FavoritesPage from '../../pages/FavoritesPage';
import { Offers } from '../../types/offer';

type AppProps = {
  offers: Offers[];
}

function App({offers}: AppProps): JSX.Element {
  const [firstOffer] = offers;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Default} element={<Layout />}>
          <Route index element={<MainPage offer={firstOffer as Offers} />} />
          <Route path={AppRoute.Room}>
            <Route index element={<RoomPage />} />
            <Route path=':id' element={<RoomPage />} />
          </Route>
          <Route path={AppRoute.SignIn} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
          />
          <Route path='*' element={
            <>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </>
          }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
