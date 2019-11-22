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
        // this.props.fetchImages()
        //     .then((images) => {
        //         this.setState({images: images});
        //     })

        // const file = this.state.file;
        // const fileReader = new FileReader();
        // fileReader.onloadend = () => {
        //     this.setState({
        //         src: fileReader.result
        //     });
        // };
        // if (file) {
        //     fileReader.readAsDataURL(file);
        // }

        debugger
    }

    handleFiles(e) {
        debugger
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
            .then((res) => console.log(res));


    }
    render() {
        return (
            <div className="upload-image-container">
                <form enctype="multi-art/form-data" onSubmit={this.handleSubmit}>
                    <input type="file" name="image" onChange={this.handleFiles}/>
                    <input type="submit" value="Attach photo"/>
                </form>
            </div>
        )
    }
}


export default ImageUpload;