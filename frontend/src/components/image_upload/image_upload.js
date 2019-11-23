import React from 'react';


class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        // this.props.post
        this.state = {
            file: null,
            src: null,
        }

        this.handleFiles = this.handleFiles.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        debugger
    }

    handleFiles(e) {
        e.preventDefault();        
        this.setState({file: e.target.files[0]});
    }

    handleSubmit(e) {
        debugger
        e.preventDefault(); 
        
        const image = new FormData();
        image.append('postId', this.props.post._id);
        image.append('image', this.state.file);
        debugger
        this.props.uploadImage(image)


    }
    render() {
        return (
            <div className="upload-image-container">
                <form encType="multi-art/form-data" onSubmit={this.handleSubmit}>
                    <input type="file" name="image" onChange={this.handleFiles}/>
                    <input type="submit" value="Attach photo"/>
                </form>
            </div>
        )
    }
}


export default ImageUpload;