import React from 'react';
import ImageItem from './image_item';

class ImageIndex extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        debugger
        this.props.fetchPostImages(this.props.post._id)
    }
    render() {
        debugger
        if(this.props.images.length === 0){
            return null
        }

        return (
            <div>
               
                <ul>
                    {this.props.images.map((img, id) => (
                        <li key={id}>
                            <ImageItem img={img} />
                        </li>
                        
                    ))}
                </ul>
            </div>
        )
    }
}

export default ImageIndex;