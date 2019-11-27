import React from 'react';
import ImageItem from './image_item';
import '../stylesheets/forum/image_index.scss'

class ImageIndex extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.fetchPostImages(this.props.post._id);
    } 
    render() {
        if(this.props.images.length === 0){
            return null
        }

        return (
            <div className="image-container">
                {this.props.images.map((img, id) => (
                    <ImageItem img={img} key={id} />
                ))}
            </div>
        )
    }
}





export default ImageIndex;