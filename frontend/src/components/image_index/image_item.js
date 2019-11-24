import React from 'react';

const ImageItem = ({img}) => {
    return (
        <div>
            <img src={img.src} alt={img.fileName}/>
        </div>
    )
};

export default ImageItem;