const db = require('../models');

module.exports = {
    create : (req, res) => {
        console.log(req.body);
        db.Comment
            .create(req.body)
            .then(dbModel => {
                return db.Post.findOneAndUpdate({ _id: req.params.postId }, { $push: { comments: dbModel._id } })
            }) 
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}