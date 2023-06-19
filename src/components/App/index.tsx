import Header from '../Header';
import MainPage from '../../pages/MainPage';

function App(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header></Header>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
