import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';

import styles from './App.module.scss';

const App: React.FC = () => (
  <div className={styles.app}>
    <BrowserRouter>
      <AppLayout>
        <h1>Hello dune world</h1>
      </AppLayout>
    </BrowserRouter>
  </div>
);

export default App;
