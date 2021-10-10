import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Box, Center } from "@chakra-ui/react"
import JobDesc from './components/JobDesc';
import Messages from './components/Messages';
import ChatScreen from './components/ChatScreen';
import CategoryJobs from './components/CategoryJobs';
import CompanyDetails from './components/CompanyDetails';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/job">
            <JobDesc />
          </Route>
          <Route exact path="/messages">
            <Messages />
          </Route>
          <Route exact path="/chat">
            <ChatScreen />
          </Route>
          <Route exact path="/category">
            <CategoryJobs />
          </Route>
          <Route exact path="/company">
            <CompanyDetails />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
