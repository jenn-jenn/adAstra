import React from "react";
import CommentsContainer from '../comment/comment_container';

class SplashPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the splash page!</h1>
        <CommentsContainer />
      </div>
    );
  }
}

export default SplashPage;
