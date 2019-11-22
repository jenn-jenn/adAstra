const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
// const keys = require("../../frontend/src/api/api")
const keys = require("../../config/keys");
const BUCKET_NAME = "adastra-photos";

console.log(keys.AWSaccessKeyId);
console.log(keys.AWSsecretAccessKey);

const s3 = new AWS.S3({
    accessKeyId: keys.AWSaccessKeyId,
    secretAccessKey: keys.AWSsecretAccessKey,
    region: 'us-west-1'
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
    }
}

// const upload = multer({
//     fileFilter,
//     storage: multerS3({
//         acl: 'public-read',
//         s3,
//         bucket: BUCKET_NAME,
//         metadata: function (req, file, cb) {
//             cb(null, { fieldName: file.fieldname });
//         },
//         key: function (req, file, cb) {
//             cb(null, req.params.id + type); 
//         }
//     })
// });

const upload = multer({
    fileFilter,
    storage: multerS3({
        acl: 'public-read',
        s3,
        bucket: BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            console.log(req.params)
            cb(null, `${Date.now().toString()}` + '-' + file.originalname);
        }
    })
});




module.exports = upload;
