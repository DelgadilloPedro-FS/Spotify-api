import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Root from './views/Root';
import Search from './views/Search';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <section>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </section>
  </div>
  );
}

export default App;