import './styles/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import IndexAdmin from './pages/admin/IndexAdmin';
import Users from './pages/admin/Users';
import LayoutAdmin from './layouts/LayoutAdmin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/admin' element={<LayoutAdmin/>}> 
           <Route path='' element={<IndexAdmin />} />
           <Route path='usuarios' element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
