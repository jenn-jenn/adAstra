import React from 'react';

class CommentForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            postId: this.props.postId,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.composeComment(this.state);
        this.setState({
            body: "",
        })
    }

    handleChange(e){
        this.setState({
            body: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="comment-form">
                <i className="fas fa-user-circle" />
                <input className="write" type="textarea" name="" onChange={this.handleChange} id="" cols="30" rows="10" placeholder="Write a comment" value={this.state.body}/>
                <input className="comment-submit" type="submit" value="Comment"/>
            </form>
        )
    }
}

export default CommentForm;