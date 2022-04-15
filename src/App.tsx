import { hot } from 'react-hot-loader/root';
import React from 'react';

import style from './App.scss';

function AppComponent() {
  return (
    <>
      <div>Hello World</div>
    </>
  );
}

export const App = hot(AppComponent);
