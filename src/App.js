import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DetailPage from './DetailPage';
import MainPage from './MainPage';
import NoMatchPage from './NoMatchPage';

function App({apartmentState}) {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage apartmentState={apartmentState} />} />
        <Route path="/detail/:id" element={<DetailPage apartmentState={apartmentState} />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
