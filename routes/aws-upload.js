module.exports = (app, AWS, Busboy, dotenv, db) => {

    dotenv.config();

    function uploadToS3(file) {
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

  // The following is an example of making file upload with additional body
  // parameters.
  // To make a call with PostMan
  // Don't put any headers (content-type)
  // Under body:
  // check form-data
  // Put the body with "element1": "test", "img_file": image file

  app.post('/api/upload', function (req, res, next) {

    db.Post.create(req.body)
        .then(dbModel => {
            
            // All data is stored in req.body
            const post = req.body;
            console.log(dbModel._id);
            console.log(post);
            var busboy = new Busboy({ headers: req.headers });
            // The file upload has completed
            busboy.on('finish', function() {
                console.log('Upload finished');
                // The files are stored in req.files.
                const file = req.files.img_file;
                let fileExtension = file.name.substr(file.name.lastIndexOf('.') + 1);
                file.name = dbModel._id.toString() + "." + fileExtension;
                console.log(file);
                uploadToS3(file);
                
            });
            req.pipe(busboy);

            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));

        
    });
}