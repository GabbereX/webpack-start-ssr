import { hot } from 'react-hot-loader/root';
import React from 'react';

import './main.global.scss';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardsList';

function AppComponent() {
  return (
    <Layout>
      <div>Hello World</div>
    </Layout>
  );
}

export const App = hot(AppComponent);
