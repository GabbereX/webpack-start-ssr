import { hot } from 'react-hot-loader/root';
import React from 'react';

import style from './header.scss';
// import './header.scss';

function HeaderComponent() {
  return (
    <header>
      <h1 className={style.example}>Hello World!</h1>
      {/* <h1 className='example'>Hello World!</h1> */}
    </header>
  );
}

export const Header = hot(HeaderComponent);
