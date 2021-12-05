
import './App.css';
import MoreInfo from './pages/MoreInformation';
import SearchPage from './pages/SearchPage';
import MainPage from './pages/MainPage';
import Layout from './components/Layout/Layout';
import NotFind from './pages/NotFind';
import {Routes,Route} from 'react-router-dom' 

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='search/:id' element={<MoreInfo />} />
          <Route path='*'element={<NotFind/>}/>
      </Route>

      </Routes>
      </>
  );
}
export default App;