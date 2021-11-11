import './styles/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import IndexAdmin from './pages/admin/IndexAdmin';
import Users from './pages/admin/Users';
import LayoutAdmin from './layouts/LayoutAdmin';
import AdminIndex from './pages/AdminIndex';
import { UserContext } from './context/user';
import { DarkContext } from './context/dark';
import { useState } from 'react';


function App() {
  const [userData, setUserData] = useState({data: 'testUserData'});
  const [modeDark, setModeDark] = useState(false);
  return (
    <DarkContext.Provider value={{modeDark, setModeDark}}>
    <UserContext.Provider value={{userData, setUserData}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/admin/index' element={<AdminIndex/>} />
        <Route path='/admin' element={<LayoutAdmin/>}> 
           <Route path='' element={<IndexAdmin />} />
           <Route path='usuarios' element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </DarkContext.Provider>
  );
}

export default App;
