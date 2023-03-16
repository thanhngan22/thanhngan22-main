import React from 'react';
import './App.css';

import router from './routes';
import {RouterProvider} from 'react-router-dom';


// 1. create load bar same github

function App() {
  return (
    <div className="App">
          <RouterProvider router = {router} />
    </div>
  );

}

export default App;

