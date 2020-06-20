import React from "react";
import { Route, Switch } from "react-router-dom";
import { isLoggedIn } from "./auth";
import Login from "./screens/Auth/Login";
import Signup from "./screens/Auth/Signup";
import UploadPost from "./screens/UploadPost";

const Routes = () => {
  if (isLoggedIn())
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/upload-post" component={UploadPost} />
        <Route path="/signup" component={Signup} />
      </Switch>
    );
  return (
    <Switch>
      <Route exact path="/" component={NotLoggedInHome} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="*" component={Error404} />
    </Switch>
  );
};

const NotLoggedInHome = () => (
  <div>
    <h1>Go TO Login</h1>
  </div>
);

const Error404 = () => (
  <div>
    <h1>You aren't supposed to be here. Do you want to login to continue?</h1>
  </div>
);

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const Profile = () => (
  <div>
    <h1>Profile</h1>
  </div>
);

export default Routes;
