import React from 'react';


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
        debugger

        const errors = [];
        if (this.fileInput.current.files.length <= 0) {
            errors.push('Please select an image');
            this.setState({errors});
            
        } else {
            const image = new FormData();
            image.append('postId', this.props.post._id);
            image.append('image', this.state.file);
            debugger
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
                    <input ref={this.fileInput} key={this.state.inputReset} type="file" name="image" onChange={this.handleFiles}/>
                    <input type="submit" value="Attach photo"/>
                </form>
                {this.state.errors.map(error => (
                    <p key={error}>{error}</p>
                ))}
            </div>
        )
    }
}


export default ImageUpload;