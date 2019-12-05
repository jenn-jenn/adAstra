import React from 'react';
import '../stylesheets/forum/image_upload.scss'

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();

        this.state = {
            file: null,
            src: null,
            errors: [],
            inputReset: Date.now()
        }

        this.handleFiles = this.handleFiles.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFiles(e) {
        e.preventDefault();
        this.setState({ file: e.target.files[0] });

    }

    handleSubmit(e) {
        e.preventDefault(); 

        const errors = [];
        if (this.fileInput.current.files.length <= 0) {
            errors.push("Unable to upload image. Image can't be blank or has to be a jpeg or png file.");
            this.setState({errors});
            
        } else {
            const image = new FormData();
            image.append('postId', this.props.post._id);
            image.append('image', this.state.file);
            this.props.uploadImage(image)
            this.setState({
                errors: [], 
                inputReset: Date.now(),
                file: null,
                src: null
            });
        }

    }
    render() {
        return (

          <div className="upload-image-container">
            <form encType="multi-art/form-data" onSubmit={this.handleSubmit}>
              <label htmlFor="file-input">
                <i className="fas fa-image" />
              </label>
              <input
                id="file-input"
                ref={this.fileInput}
                key={this.state.inputReset}
                type="file"
                name="image"
                onChange={this.handleFiles}
              />
              <input
                type="submit"
                value="Attach Photo"
                className="upload-image-submit"
              />
            </form>
            {this.state.errors.map(error => (
              <p key={error}>{error}</p>
            ))}
          </div>
        );
    }
}


export default ImageUpload;