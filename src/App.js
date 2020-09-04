import React from 'react';
import './styles.css';


import Header from './components/Header';
import Main from './pages/main'

const App = () => (
  <div className="app">
    <Header />
    <Main />
  </div>
);

export default App;