import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import FooterContainer from './footer/footer_container';
import NavBarContainer from "./nav/navbar_container";
import SplashPage from './splash/splash_page';
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import PostsContainer from "./posts/posts_container";
import PostShowContainer from "./posts/post_show_container";
import Modal from './modal/Modal';


const App = () => (
  <div id="app">
    <header><NavBarContainer /></header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={SplashPage} />
      <div>
        <ProtectedRoute exact path="/main" component={MainPage} />
        <Modal />
      </div>
      <ProtectedRoute exact path="/posts" component={PostsContainer} />
      <ProtectedRoute exact path="/posts/:postId" component={PostShowContainer} />
      
    </Switch>
    <Route exact path="/main" component={FooterContainer} />
  </div>
);

export default App;
