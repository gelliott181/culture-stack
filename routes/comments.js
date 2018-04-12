const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Matches with "/api/comments"
router.route("/comments/:postId")
  .post(commentsController.create);

// Matches with "/api/comments/:id"
// router
//   .route("/comments/:id")
//   .delete(commentsController.remove);

module.exports = router;