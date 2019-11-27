import React from 'react';

const ImageItem = ({img}) => {
    return (
        <div className="image">
            <img src={img.src} alt={img.fileName}/>
        </div>
    )
};

export default ImageItem;