import React from 'react';
import AppLayout from './components/AppLayout';

import styles from './App.module.scss';

const App: React.FC = () => (
  <div className={styles.app}>
    <AppLayout>
      <h1>Hello dune world</h1>
    </AppLayout>
  </div>
);

export default App;
