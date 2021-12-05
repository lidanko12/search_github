
import './App.css';
// import MoreInfo from './pages/MoreInformation';
// import SearchPage from './pages/SearchPage';
// import MainPage from './pages/MainPage';
// import Layout from './components/Layout/Layout';
// import NotFind from './pages/NotFind';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import Loader from 'react-loader-spinner';
const MainPage = lazy(() => import('./pages/MainPage' /* webpackChunkName: "main-view" */))
const Layout = lazy(() => import('./components/Layout/Layout' /* webpackChunkName: "layout" */))
const SearchPage = lazy(() => import('./pages/SearchPage' /* webpackChunkName: "search-view" */))
const MoreInfo = lazy(() => import('./pages/MoreInformation' /* webpackChunkName: "more-info" */))
const NotFind = lazy(() => import('./pages/NotFind' /* webpackChunkName: "no-find-view" */))

function App() {
  return (
    <>
        <Suspense fallback={<Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
        />}>
        <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='search/:id' element={<MoreInfo />} />
          <Route path='*' element={<NotFind/>}/>
      </Route>
      </Routes>
          </Suspense>
      </>
  );
}
export default App;