import React, { useState, useEffect, useMemo } from "react"; // User stuff
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom"; // Add Redirect after implementing user
import Home from "./screens/Home/Home";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import SignUp from "./screens/SignUp/SignUp";
import Listings from "./screens/Listings/Listings";
import ListingCreate from "./screens/ListingCreate/ListingCreate";
import ListingEdit from "./screens/ListingEdit/ListingEdit";
import ListingDetail from "./screens/ListingDetail/ListingDetail";
// import { verifyUser } from './services/user' // User Stuff
import { UserContext } from "./utilities/userContext";

const App = () => {
  // Global useState passed into UseContext provider (no user by default)
  const [user, setUser] = useState(null);
  // Value of user only recalculates when it changes, instead of when components rerender
  const providerUser = useMemo(() => ({ user, setUser }, [user, setUser]));

  return (
    <div className="App">
      <Switch>
        <UserContext.Provider value={providerUser}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-out">
            <SignOut />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/add-listing">
            {user ? <ListingCreate /> : <Redirect to="/sign-up" />}
          </Route>
          <Route path="/listings/:id/edit">
            {user ? <ListingEdit /> : <Redirect to="/" />}
          </Route>
          <Route path="/listings/:id">
            <ListingDetail />
          </Route>
        </UserContext.Provider>
      </Switch>
    </div>
  );
};

export default App;
