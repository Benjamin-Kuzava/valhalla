import React, { useState, useEffect, useMemo } from "react"; // User stuff
import "./App.css";
import { Route, Switch } from "react-router-dom"; // Add Redirect after implementing user
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
  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <Switch>
        <UserContext.Provider value={providerValue}>
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
            <ListingCreate />
          </Route>
          <Route path="/listings/:id/edit">
            <ListingEdit />
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
