import { hot } from 'react-hot-loader/root';
import React from 'react';

import './main.global.scss';

function AppComponent() {
  return (
    <>
      <div>Hello World</div>
    </>
  );
}

export const App = hot(AppComponent);
