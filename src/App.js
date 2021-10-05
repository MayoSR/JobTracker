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

function App() {
  return (
    <Box className="App" p={4} bg="#f5f5f5">
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
          <Route exact path="/profile">
          </Route>

        </Switch>
        <Navbar />
      </Router>
    </Box>
  );
}

export default App;
