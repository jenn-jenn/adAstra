// src/components/app.js

import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import SplashPage from './splash/splash_page';
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import PostsContainer from "./posts/posts_container";
import PostFormContainer from "./posts/post_form_container";
import PostShowContainer from "./posts/post_show_container";
import DatesContainer from "./calendar/dates_container";
import EventsContainer from './events/events_container';


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
   
      <ProtectedRoute exact path="/splash" component={SplashPage} />
      <ProtectedRoute exact path="/posts" component={PostsContainer} />
      <ProtectedRoute exact path="/posts/" component={PostFormContainer} />
      <ProtectedRoute exact path="/posts/:postId" component={PostShowContainer} />
      <ProtectedRoute exact path="calendar" component={DatesContainer} />
      <ProtectedRoute exact path="/events" component={EventsContainer} />
      
    </Switch>
  </div>
);

export default App;
