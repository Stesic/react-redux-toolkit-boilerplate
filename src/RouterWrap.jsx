import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AppLayout from "./layouts/AppLayout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";

import { useSelector } from "react-redux";
import { selectIsUserLogged } from "store/slices/exampleSlice";

const RouterWrap = () => {
  const isUserLoggedIn = useSelector(selectIsUserLogged)

  const sessionActive = sessionStorage.getItem("TOKEN")


  
  
  if (!isUserLoggedIn && !sessionActive) {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <HomePage />
          </Route>
          <Redirect to="/register">
            <HomePage />
          </Redirect>
        </Switch>
      </Router>
    );
  }
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Redirect to="/HomePage">
            <HomePage />
          </Redirect> 
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default RouterWrap;
