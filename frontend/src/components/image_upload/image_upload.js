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
        
        if (this.fileInput.current.files.length <= 0) {
            const errors = [];
            errors.push("Unable to upload image. Image can't be blank or has to be a jpeg or png file.");
            this.setState({errors});
            
        } else if (this.fileInput.current.files.length > 0) {
          if (this.fileInput.current.files[0].type === "image/jpeg" || 
              this.fileInput.current.files[0].type === "image/png") {
            const image = new FormData();
            image.append('postId', this.props.post._id);
            image.append('image', this.state.file);
            this.props.uploadImage(image)
            this.setState({
              errors: [],
              inputReset: Date.now(),
              file: null,
              src: null
            })
          }else {
            const errors = [];
            errors.push('Invalid image');
            this.setState({ errors });
        }
      }
    }

    componentDidMount() {
      document.querySelector(".fas.fa-image").addEventListener("mouseover", () => {
        document.querySelector(".file-input-div").classList.remove("hidden");
      })
      document.querySelector(".fas.fa-image").addEventListener("mouseout", () => {
        const div = document.querySelector(".file-input-div")
        if (!div.className.includes("hidden")) div.classList.add("hidden");
      })
    }

    render() {
        return (

          <div className="upload-image-container">
            <form encType="multi-art/form-data" onSubmit={this.handleSubmit}>
              <label htmlFor="file-input" className="file-input-label">
                <i className="fas fa-image"></i>
                <div className="file-input-div hidden">Attach Image</div>
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
                value="Submit Photo"
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