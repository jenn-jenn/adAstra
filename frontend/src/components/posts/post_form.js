import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return(e) => {
            this.setState({[ field]: e.currentTarget.value} );
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            title: this.state.title,
            body: this.state.body,
            author: this.props.currentUser.id
        };
        this.props.createNewPost(data)
          .then(res =>{
            let file = document.getElementById("file-input").files[0];
            if (file){
              const image = new FormData();
              image.append('postId', res.post.data._id);
              image.append('image', file);
              this.props.uploadImage(image)
            }
          })
          .then( () => this.props.fetchPosts());
        this.setState({title: '', body: ''});
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit} className="post-form">
            <input
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="Title"
            />
            <input
              className="write"
              type="textarea"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Write post"
            />
            <div className="image-upload">
              <label htmlFor="file-input">
                <i className="fas fa-image"/>
              </label>
              <input id="file-input" type="file" />
            </div>
            <input
              type="submit"
              value="Submit"
              className="post-form-submit"
            />
          </form>
        );
    }
};

export default PostForm;
