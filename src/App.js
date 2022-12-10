import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Menu from './components/Menu'
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage'
// const UsersPage

const App = () => {
  return (
      <div>
        <Menu />
        <hr />
      <Routes>
         {/*<Route path="/" element={Menu}/>*/}
         <Route path="/red" element={<RedPage />} />
         <Route path="/blue" element={<BluePage />} />
         {/*<Route path="/users" component={UsersPage} />*/}
      </Routes>

      </div>
  );
};

export default App;
