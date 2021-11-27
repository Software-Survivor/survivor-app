import "./styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexUsuarios from "./pages/usuarios/Index";
import IndexAdmin from "./pages/admin/IndexAdmin";
import Users from "./pages/admin/Users";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminIndex from "./pages/AdminIndex";
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
const httpLink = createHttpLink({
  uri: "http://localhost:4001/graphql",
});

const client = new ApolloClient({
  uri: "httpLink",
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
              <Route path="/" element={<LayoutAdmin />} >
                <Route path="" element={<Index />} />
                <Route path="/usuarios" element={<IndexUsuarios />} />
              </Route>
              <Route path="/admin/index" element={<AdminIndex />} />
              <Route path="/admin" element={<LayoutAdmin />}>
                <Route path="" element={<IndexAdmin />} />
                <Route path="users" element={<Users />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </DarkContext.Provider>
    </ApolloProvider>
  );
}

export default App;
