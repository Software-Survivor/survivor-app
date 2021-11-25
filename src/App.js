import "./styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Index from "./pages/Index";
import IndexAdmin from "./pages/admin/IndexAdmin";
import IndexUsers from "./pages/users";
import IndexProject from "./pages/project";
import Users from "./pages/admin/Users";
import EditUser from "./pages/users/EditUser";
import PrivateLayouth from "./layouts/privateLayout";
import AdminIndex from "./pages/AdminIndex";
import { UserContext } from "./context/user";
import { AuthContext } from "./context/authContext";
import { DarkContext } from "./context/dark";
import { useState } from "react";
import Register from "./pages/auth/register";
import LayoutAuth from "./layouts/LayoutAuth";
import Login from "./pages/auth/login";

// const httpLink = createHttpLink({
//   uri: "https://api-proyecta-tic.herokuapp.com/graphql"
// })
const httpLink = createHttpLink({
  uri: "http://localhost:4001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // uri: "https://api-proyecta-tic.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  const [userData, setUserData] = useState({ data: "testUserData" });
  const [modeDark, setModeDark] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const setToken = (token) => {
    setAuthToken(token);
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  };
  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ setToken, authToken, setAuthToken }}>
        <DarkContext.Provider value={{ modeDark, setModeDark }}>
          <UserContext.Provider value={{ userData, setUserData }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<LayoutAuth />}>
                  <Route path="register" element={<Register />} />
                  <Route path="login" element={<Login />} />
                </Route>
                <Route path="/admin/index" element={<AdminIndex />} />
                <Route path="/admin" element={<PrivateLayouth />}>
                  <Route path="" element={<IndexAdmin />} />
                  <Route path="usuarios" element={<Users />} />
                  <Route path="project/index" element={<IndexProject />} />
                  <Route path="user/index" element={<IndexUsers />} />
                  <Route path="edit/user/:_id" element={<EditUser />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </DarkContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
