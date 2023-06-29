import {Route, BrowserRouter, Routes, Link} from 'react-router-dom';

// project imports
import {AppRoute, AuthorizationStatus} from '../../consts';
import PrivateRoute from '../PrivateRoute';
import Layout from '../Layout';
import MainPage from '../../pages/MainPage';
import RoomPage from '../../pages/RoomPage';
import LoginPage from '../../pages/LoginPage';
import NotFoundPage from "../../pages/NotFoundPage";
import FavoritesPage from '../../pages/FavoritesPage';
import { Offer } from '../../types/offer';


type AppProps = {
  offers: Offer[];
}

function App({offers}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
          <Route index path={AppRoute.Main} element={<MainPage offersItems={offers as Offer[]} />} />
          <Route path={AppRoute.Room}>
            <Route index element={<RoomPage />} />
            <Route path=':id' element={<RoomPage />} />
          </Route>
          <Route path={AppRoute.SignIn} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={
            // <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage offersItems={offers as Offer[]} />
            // </PrivateRoute>
          }
          />
          <Route path={AppRoute.Error} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
