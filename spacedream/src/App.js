import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Welcome from "./components/Welcome";
import MenuBar from "./components/MenuBar"
import TabMenu from "./components/TabMenu"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" component={MenuBar} />
        <Route path="/" component={Welcome} />
        <Route path="/" component={TabMenu} />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
        </Switch>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
