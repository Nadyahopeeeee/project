import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';

export default function Layout() {
  return (
    <div className="page page--gray page--main">
      <Header></Header>
      <>
        <Outlet />
      </>
    </div>
  );
}
