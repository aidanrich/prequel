import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import VideoCrud from "./pages/VideoCrud"
import Video from "./pages/Video";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CloudinaryUploadWidget from "./components/Upload";
import Profile from "./pages/Profile"
import AdminUser from "./pages/AdminUser";
import OtherProfiles from "./pages/OtherProfiles";
import LevelChanger from "./pages/LevelChanger";
import Follows from "./pages/Follows"
import FollowProfiles from "./pages/FollowProfiles";
// Query and mutate models on localhost:3001/graphql
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="footer-positioning">
          <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/upload">
            <CloudinaryUploadWidget />
          </Route>
          <Route exact path="/videos/:videoId">
            <Video />
          </Route>
          <Route exact path="/videosCrud/:videoId">
            <VideoCrud />
          </Route>
          <Route exact path="/me">
            <Profile />
          </Route>
          <Route exact path="/admin">
            <AdminUser />
          </Route>
          <Route exact path="/otherprofiles/:videoAuthor">
            <OtherProfiles />
          </Route>
          <Route exact path="/userCrud/:userId">
            <LevelChanger />
          </Route>
          <Route exact path="/follows">
            <Follows />
          </Route>
          <Route exact path="/followprofiles/:videoAuthor">
            <FollowProfiles />
          </Route>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
