import "./styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import Index from "./pages/Index";
import IndexAdmin from "./pages/admin/IndexAdmin";
import IndexUsers from "./pages/users";
import IndexProject from "./pages/project";
import Users from "./pages/admin/Users";
import EditUser from "./pages/users/EditUser"
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminIndex from "./pages/AdminIndex";
import { UserContext } from "./context/user";
import { DarkContext } from "./context/dark";
import { useState } from "react";

// const httpLink = createHttpLink({
//   uri: "https://api-proyecta-tic.herokuapp.com/graphql"
// })

const client = new ApolloClient({
  uri: "https://api-proyecta-tic.herokuapp.com/graphql",
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
              <Route path="/" element={<Index />} />
              
              <Route path="/admin/index" element={<AdminIndex />} />
              <Route path="/admin" element={<LayoutAdmin />}>
                <Route path="" element={<IndexAdmin />} />
                <Route path="usuarios" element={<Users />} />
                <Route path="project/index" element={<IndexProject />} />
                <Route path="user/index" element={<IndexUsers />} />
                <Route path="edit/user/:_id" element={<EditUser/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </DarkContext.Provider>
    </ApolloProvider>
  );
}

export default App;
