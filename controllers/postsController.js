const Busboy = require('busboy');
const uploadToS3 = require('./uploadToS3');
const db = require('../models');

module.exports = {

    create : (req, res) => {

        // Split the tags into an array, because the FormData() constructor has turned it to a single string.
        req.body.tags = req.body.tags.split(',');

        db.Post
            .create(req.body)
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
                    // Find the file extension of the uploaded photo and then store this value in fileExtension
                    let fileExtension = file.name.substr(file.name.lastIndexOf('.') + 1);
                    // Rename the file to the Post._id with the extension appended.
                    file.name = dbModel._id.toString() + "." + fileExtension;
                    console.log(file);
                    uploadToS3(file);
                    
                });
                req.pipe(busboy);
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },

    findAll : (req, res) => {
        db.Post
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
    findById : (req, res) => {
        console.log(req.params.id)
        db.Post
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update : (req, res) => {
        db.Post
            .findById({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove : (req, res) => {
        db.Post
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
    
}
