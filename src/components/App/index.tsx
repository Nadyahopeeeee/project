import {Route, BrowserRouter, Routes} from 'react-router-dom';

import Layout from '../Layout';
import MainPage from '../../pages/MainPage';
import LoginPage from '../../pages/LoginPage';
import FavoritesPage from '../../pages/FavoritesPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='favorites' element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="page page--gray page--main">
    //   <Header></Header>
    //   <MainPage></MainPage>
    // </div>
  );
}

export default App;
