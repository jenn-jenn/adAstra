import * as ImageUtil from '../util/image_util';

export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_IMAGE_ERRORS = "RECEIVE_IMAGE_ERRORS";
export const RECEIVE_POST_IMAGES = "RECEIVE_POST_IMAGES";

const receiveImages = (images) => {
    return {
        type: RECEIVE_IMAGES,
        images
    };
};

const receiveImage = (image) => {
    return {
        type: RECEIVE_IMAGE,
        image
    };
};

const receivePostImages = images => {
    return ({
        type: RECEIVE_POST_IMAGES,
        images
    })
}

const receiveImageErrors = (errors) => {
    return {
        type: RECEIVE_IMAGE_ERRORS,
        errors
    };
};

// ------------------------------------------------

export const fetchImages = () => (dispatch) => {
    return ImageUtil.getImages()
        .then( images => dispatch(receiveImages(images)))
        .catch( err => dispatch(receiveImageErrors(err)));
};


export const fetchPostImages = (id) => (dispatch) => {
    return ImageUtil.getImagesByPost(id)
        .then(images => dispatch(receivePostImages(images)))
        .catch(err => dispatch(receiveImageErrors(err)));
};

export const uploadImage = (data) => (dispatch) => {
    return ImageUtil.uploadImage(data) 
        .then( (imgData) => {
            return ImageUtil.uploadImageToDB(imgData)
                .then((image) => dispatch(receiveImage(image)))
        })
        .catch( err => dispatch(receiveImageErrors(err)));
};