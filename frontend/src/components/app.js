import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import FooterContainer from './footer/footer_container';
import NavBarContainer from "./nav/navbar_container";
import SplashPage from './splash/splash_page';
import MainPageContainer from "./main/main_page_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import PostsContainer from "./posts/posts_container";
import PostShowContainer from "./posts/post_show_container";
import DateShowContainer from "./calendar/date_show_container";
import EventFormContainer from './events/event_form_container';
import CosmicObjectContainer from './cosmicObjects/cosmicObjectsContainer';
import CosmicObjectsShow from './cosmicObjects/cosmicObjectsshowContainer';
import About from "./about/about";
import EventFormModal from "./modal/event_form_modal";


const App = () => (
  <div id="app">
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <ProtectedRoute exact path="/main" component={MainPageContainer} />
      <ProtectedRoute exact path="/posts" component={PostsContainer} />
      <ProtectedRoute exact path="/posts/:postId" component={PostShowContainer} />
      <ProtectedRoute exact path="/events/new" component={EventFormContainer} />    
      <ProtectedRoute exact path="/events/:date" component={DateShowContainer} />
      <ProtectedRoute exact path="/constellations" component={CosmicObjectContainer} />
      <ProtectedRoute exact path="/constellations/:star" component={CosmicObjectsShow} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={SplashPage} />
    </Switch>
    <Route path="/" component={EventFormModal} />
    <Route exact path="/about" component={About} />
    <Route exact path="/main" component={FooterContainer} />
    

  </div>
)

export default App;
