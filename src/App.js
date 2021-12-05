import "./styles/main.css";
import './styles/tailwind.css'
import './styles/tabla.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index'
import IndexUsers from './pages/Users/Index'
import IndexAdmin from "./pages/admin/IndexAdmin";
import EditUser from './pages/Users/Edit'
import LayoutAdmin from "./layouts/LayoutAdmin";
import { UserContext } from "./context/user";
import { DarkContext } from "./context/dark";
import { useState } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

// const httpLink = createHttpLink({
//   uri: "https://api-proyecta-tic.herokuapp.com/graphql"
// })
/* const httpLink = createHttpLink({
  uri: "http://localhost:4001/graphql",
});
 */
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [userData, setUserData] = useState({ data: "testUserData" });
  const [modeDark, setModeDark] = useState(false);
  return (
    <ApolloProvider client={client}>
      <DarkContext.Provider value={{ modeDark, setModeDark }}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Index/>}/>
              <Route path="/admin" element={< LayoutAdmin/>}>
                <Route path="" element={<IndexAdmin />} />
              </Route>
              <Route path='/usuarios' element={<IndexUsers/>}/>
              <Route path='/usuarios/editar/:_id' element={<EditUser/>}/>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </DarkContext.Provider>
    </ApolloProvider>
  );
}

export default App;
