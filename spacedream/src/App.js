import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import Header from './components/Header'
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Welcome from "./components/Welcome";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" component={Header} />
        <Route path="/" component={Welcome} />
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
