import React from 'react';
import { Route } from 'react-router-dom';

import Market from './pages/Market';
import CustomProject from './pages/CustomProject';
import Enterprise from './pages/Enterprise';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Market} exact />
      <Route path="/custom-project" component={CustomProject} exact />
      <Route path="/enterprise" component={Enterprise} exact />
    </div>
  );
}

export default App;
