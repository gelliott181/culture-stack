AWS = require('aws-sdk');
dotenv = require('dotenv').config();

module.exports = function uploadToS3(file) {
        
    let s3bucket = new AWS.S3({
        accessKeyId: process.env.IAM_USER_KEY,
        secretAccessKey: process.env.IAM_USER_SECRET
    });
    s3bucket.createBucket(function () {
        var params = {
            Bucket: process.env.BUCKET_NAME,
            Key: file.name,
            Body: file.data
        };
        s3bucket.upload(params, function (err, data) {
            if (err) {
            console.log('error in callback');
            console.log(err);
            }
            console.log('success');
            console.log(data);
        });
    });
}



