import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import View from './Pages/View';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='add' element={<Add />}/>
      <Route path='edit' element={<Edit />}/>
      <Route path='view' element={<View />}/>
    </Routes>
  );
};

export default App;