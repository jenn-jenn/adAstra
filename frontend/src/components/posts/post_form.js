import React from 'react';
import PostItem from './post_item';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            newPost:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newPost: nextProps.newPost });
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
          .then( () => this.props.fetchPosts());
        this.setState({title: '', body: ''})
    }


    render() {
        return (
          <div>
            {/* <PostItem post={this.state.newPost} /> */}
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                  placeholder="Title"
                />
                <input
                  type="textarea"
                  value={this.state.body}
                  onChange={this.update("body")}
                  placeholder="..."
                />
                <input type="submit" value="Submit"/>
              </div>
            </form>
          </div>
        );
    }
};

export default PostForm;