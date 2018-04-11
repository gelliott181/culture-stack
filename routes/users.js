const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Matches with "/api/users"
router.route("/users")
  .get(usersController.findAll);

// Matches with "/api/users/:id"
router
  .route("/users/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;